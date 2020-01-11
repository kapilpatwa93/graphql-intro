const {GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');
const User = require('./resolvers/User');
const Link = require('./resolvers/Link');
const Address = require('./resolvers/Address');
const {ROOT_DIR} = require('./utils');

const resolvers = {
    Query,
    Mutation,
    Link,
    User,
};
console.log(ROOT_DIR, "dir",__dirname);
const server = new GraphQLServer({
    typeDefs: `${__dirname}/schema.graphql`,
    resolvers,
    context: request => ({
        ...request,
            prisma
    })
});

server.start(() => {
    console.log('Server is running on localhost:4000');
});
