const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");

dotenv.config();
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

app.listen(process.env.PORT || 4000, () => {
  console.log("Now listening to requests on port 4000");
});