const {GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
    Query: {
        info: () => 'This is clone of the hacker-news',
        feed: (root, args, context, info) => {
            return context.prisma.links()
        }
    },
    Mutation: {
    },
    Link: {
      id: (parent) => parent.id,
      description: (parent) => parent.description,
      url: (parent) => parent.url
    }
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: { prisma }
});

server.start(() => {
    console.log('Server is running on localhost:4000');
})
