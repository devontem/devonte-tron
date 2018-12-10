const express = require("express");
const path = require("path");
const { ApolloServer, gql } = require("apollo-server-express");
const { typeDefs, resolvers } = require("./schema");

// apollo server
const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

// serving static files
app.use(express.static(path.resolve(__dirname, "..", "build")));

// render react app
app.get("/", function(req, res) {
	res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

// start server
app.listen({ port: 4000 }, () =>
	console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
