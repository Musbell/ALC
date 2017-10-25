import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLList,
  GraphQLID
} from 'graphql'

// Define our student type, with two string fields; `id` and `name`
export default new GraphQLObjectType({
  name: 'Student',
  description: 'Student object',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    id: {
      type: GraphQLString
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    otherName: {
      type: new GraphQLNonNull(GraphQLString)
    },
    gender: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dateOfBirth: {
      type: new GraphQLNonNull(GraphQLString)
    },
    nationality: {
      type: new GraphQLNonNull(GraphQLString)
    },
    sessionOfAdmission: {
      type: new GraphQLNonNull(GraphQLString)
    },
    dateOfAdmission: {
      type: new GraphQLNonNull(GraphQLString)
    },
    stateOfOrigin: {
      type: new GraphQLNonNull(GraphQLString)
    },
    religion: {
      type: new GraphQLNonNull(GraphQLString)
    },
    address: {
      type: new GraphQLNonNull(GraphQLString)
    },
    city: {
      type: new GraphQLNonNull(GraphQLString)
    },
    state: {
      type: new GraphQLNonNull(GraphQLString)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString)
    },
  })
});
