const { gql } = require("apollo-server-express");

// mock data
const positions = [
  { role: "sdet", description: "fun", year: "2009", company: "yahoo" },
  {
    role: "sdet",
    description: "great",
    year: "2014",
    company: "music reports"
  },
  {
    role: "sdet",
    description: "exciting",
    year: "2021",
    company: "test3"
  }
];
const resume = {
  name: "Devonte MacGlashan",
  city: "Los Angeles",
  positions: positions,
  github_handle: "devontem"
};
const mock_db = {
  resume: resume,
  positions: positions
};

// type defs
const typeDefs = gql`
  type Position {
    role: String!
    description: String!
    year: Int!
    company: String!
  }

  input PositionInput {
    role: String!
    description: String!
    year: Int!
    company: String!
  }

  type Resume {
    name: String!
    city: String!
    github_handle: String
    positions: [Position]!
  }

  type Query {
    position(idx: Int!): Position
    resume: Resume
  }

  type Mutation {
    addPosition(position: PositionInput!): Position
    deletePosition(idx: Int!): Position
  }
`;

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
    addPosition: (root, args, { req, res }, info) => {
      mock_db.positions.push(args.position);
      return mock_db.positions[mock_db.positions.length - 1];
    },
    deletePosition: (root, args, { req, res }, info) => {
      const position = mock_db.positions.find((obj, idx) => idx == args.idx);
      mock_db.positions = mock_db.positions.filter(obj => obj.id != args.id);
      return position;
    }
  }
};

module.exports.typeDefs = typeDefs;
module.exports.resolvers = resolvers;
