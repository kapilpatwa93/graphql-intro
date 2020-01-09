const {GraphQLServer } = require('graphql-yoga');
const links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
}];
const resolvers = {
    Query: {
        info: () => 'This is clone of the hacker-news',
        feed: () => links
    },
    Mutation: {
        post : (parents,args) => {
            const link = {
                id: `link-1`,
                description: args.description,
                url: args.url
            };
            links.push(link);
            return link
        }
    },
    Link: {
      id: (parent) => parent.id,
      description: (parent) => parent.description,
      url: (parent) => parent.url
    }
};

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
});

server.start(() => {
    console.log('Server is running on localhost:4000');
})
