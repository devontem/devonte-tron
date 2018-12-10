const { gql } = require("apollo-server-express");
const mock_db = require("./mock-data");

// type defs
const typeDefs = gql`
  type Position {
    role: String!
    description: String!
    year: String!
    company: String!
  }

  input PositionInput {
    role: String!
    description: String!
    year: String!
    company: String!
  }

  type Resume {
    name: String!
    city: String!
    github_url: String
    photo_url: String
    positions: [Position]!
  }

  type Query {
    position(idx: Int!): Position
    resume: Resume
  }

  type Mutation {
    AddPosition(position: PositionInput!): Position
    DeletePosition(idx: Int!): Position
  }
`;

// resolvers
const resolvers = {
  Query: {
    position: (root, args, { req }, info) => {
      return mock_db.positions.find((obj, idx) => idx == args.idx);
    },
    resume: (root, args, { req }, info) => {
      return mock_db.resume;
    }
  },
  Mutation: {
    AddPosition: (root, args, { req, res }, info) => {
      mock_db.positions.push(args.position);
      return mock_db.positions[mock_db.positions.length - 1];
    },
    DeletePosition: (root, args, { req, res }, info) => {
      const position = mock_db.positions[args.idx];
      mock_db.positions.splice(args.idx, 1);
      return position;
    }
  }
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
