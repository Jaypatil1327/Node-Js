require("dotenv").config();
const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const connectToDB = require("./database/db");
const typeDefs = require("./graphql/schema");
const resolvers = require("./graphql/resolvers");

// step 1 : create a typedefs / schema
// step 2 : create a resolver
// step 3 : start apollo server with above instances
connectToDB();

const startServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: process.env.PORT,
  });

  console.log(url);
};

startServer();
