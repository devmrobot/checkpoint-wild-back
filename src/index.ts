const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
};

const port = 5000

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({port}).then(({ url }:any) => {
  console.log(`🚀  Server ready at ${url}`);
});
