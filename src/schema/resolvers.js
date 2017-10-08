const { GraphQLScalarType, GraphQLEnumType} = require('graphql')
const { Kind } = require('graphql/language')

// const students = [
//   {
//     studentId: 1,
//     lastName: 'Bello',
//     firstName: 'Musa',
//     otherNames: 'Abiola',
//     gender: 'Male',
//     dateOfBirth: '16-04-2000',
//     nationality: 'Nigeria',
//     sessionOfAdmission: '2016/2017',
//     dateOfAdmission: '06-10-2016',
//     stateOfOrigin: 'Ogun',
//     religion: 'Islam',
//     address: '35 zoo road',
//     city: 'Kano',
//     state: 'Kano',
//     email: 'musbell007@gmail.com',
//     phone: '08066131053'
//   }
// ]

const resolvers = {
  // Date: new GraphQLScalarType({
  //   name: 'Date',
  //   description: 'Date custom scalar type',
  //   parseValue (value) {
  //     return new Date(value) // value from the client
  //   },
  //   serialize (value) {
  //     return value.getTime() // value sent to the client
  //   },
  //   parseLiteral (ast) {
  //     if (ast.kind === Kind.INT) {
  //       return parseInt(ast.value, 10) // ast value is always in string format
  //     }
  //     return null
  //   }
  // }),
  Query: {
    allStudents: async (root, data, {mongo: {Students}}) => { // 1
      return await Students.find({}).toArray() // 2
    }
  },
  Mutation: {
    createStudent: async (root, data, {mongo: {Students}}) => {
      const response = await Students.insert(data) // 3
      return Object.assign({id: response.insertedIds[0]}, data) // 4
    }
  },

  Student: {
    id: root => root._id || root.id // 5
  }
}

module.exports = resolvers
