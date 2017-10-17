const {execute, subscribe} = require('graphql');
const {createServer} = require('http');
const {SubscriptionServer} = require('subscriptions-transport-ws');
const {authenticate} = require('./authentication');
const buildDataloaders = require('./dataloaders');
const express = require('express');
const OpticsAgent = require('optics-agent');

const cors = require('cors');


// This package automatically parses JSON requests.
const bodyParser = require('body-parser');

// This package will handle GraphQL server requests and responses
// based on the schema.
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');

const schema = require('./schema');

// 1
const connectMongo = require('./mongo-connector');

// 2
const start = async () => {
  // 3
  const mongo = await connectMongo();
  let app = express();

  const PORT = 1337;

  const buildOptions = async (req, res) => {
    const user = await authenticate(req, mongo.Users);
    return {
      context: {
        dataloaders: buildDataloaders(mongo),
        mongo,
        user,
        opticsContext: OpticsAgent.context(req),
      }, // This context object is passed to all resolvers.
      schema: OpticsAgent.instrumentSchema(schema)
    };
  };
  app.use(cors());
  app.set('port', process.env.PORT || 3000);
  app.use(OpticsAgent.middleware());
  app.use('/graphql', bodyParser.json(), graphqlExpress(buildOptions));

  app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
    passHeader: `'Authorization': 'bearer token-musbell007@gmail.com'`,
    subscriptionsEndpoint: `ws://localhost:${PORT}/subscriptions`,
  }));

  const server = createServer(app);
  server.listen(PORT, () => {
    SubscriptionServer.create(
      {execute, subscribe, schema},
      {server, path: '/subscriptions'},
    );
    console.log(`GraphQL server running on port ${PORT}.`)
  });
};

// 5
start();
