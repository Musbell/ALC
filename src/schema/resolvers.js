const ObjectId = require('mongodb')
const pubsub = require('../pubsub');


function buildFilters({OR = [], firstName_contains, lastName_contains}) {
  const filter = (firstName_contains || lastName_contains) ? {} : null;
  if ( firstName_contains) {
    filter.firstName = {$regex: `.*${firstName_contains}.*`};
  }
  if (lastName_contains) {
    filter.lastName = {$regex: `.*${lastName_contains}.*`};
  }

  let filters = filter ? [filter] : [];
  for (let i = 0; i < OR.length; i++) {
    filters = filters.concat(buildFilters(OR[i]));
  }
  return filters;
}


const resolvers = {
  Query: {
    allStudents: async (root,{filter, first, skip},{mongo: {Students}}) => { // 1
      let query = filter ? {$or: buildFilters(filter)} : {};
      const cursor = Students.find(query)
      if (first) {
        cursor.limit(first);
      }
      if (skip) {
        cursor.skip(skip);
      }
      return cursor.toArray();
    },
    Student: async (root, {id}, {mongo: {Students}}) => {
       return await Students.findOne(ObjectId(id))
    }
  },
  Mutation: {
    createStudent: async (root, data, {mongo: {Students}}) => {
      const response = await Students.insert(data) // 3
      const newStudent = Object.assign({id: response.insertedIds[0]}, data) // 4

      newStudent.id = response.insertedIds[0]
      pubsub.publish('Student', {student: {mutation: 'CREATED', node: newStudent}});

      return newStudent;

    },
    createUser: async (root, data, {mongo: {Users}}) => {
      // convert the given arguments into the format for the
      // `User` type, grabbing email and password from the "authProvider".
      const newUser = {
        name: data.name,
        email: data.authProvider.email.email,
        password: data.authProvider.email.password,
      };
      const response = await Users.insert(newUser);
      return Object.assign({id: response.insertedIds[0]}, newUser);
    },
    signinUser: async (root, data, {mongo: {Users}}) => {
      const user = await Users.findOne({email: data.email.email});
      if (data.email.password === user.password) {
        return {token: `token-${user.email}`, user};
      }
    },
  },
  Student: {
    id: root => root._id || root.id // 5
  },
  User: {
    // Convert the "_id" field from MongoDB to "id" from the schema.
    id: root => root._id || root.id,
  },
  Subscription: {
    Student: {
      subscribe: () => pubsub.asyncIterator('Student'),
    },
  },
}




module.exports = resolvers
