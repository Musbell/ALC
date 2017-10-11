const {makeExecutableSchema} = require('graphql-tools');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

// Generate the schema object from type definition
module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
