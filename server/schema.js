const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    test: String
  }
`;

const resolvers = {
  Query: {
    test: (root, args, { req }, info) => {
      return "hi";
    }
  }
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
