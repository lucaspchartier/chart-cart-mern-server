require("dotenv").config;
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");

const app = express();

app.use(cors());

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.once("open", () => {
  console.log("Connected to database");
});

app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Now listening to requests on port 4000");
});