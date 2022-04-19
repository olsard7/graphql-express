const { ApolloServer, gql } = require("apollo-server");
const dogsData = require("./dogsData");

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type Dog {
    uid: ID
    breed: String
  }

  type DogWithImg {
    uid: ID
    breed: String
    displayImage: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    dogs: [Dog]
    dogWithImg(breed: String): DogWithImg
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    dogs: () => dogsData,
    dogWithImg: (parent, args) =>
      dogsData.find((item) => item.breed === args.breed),
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
