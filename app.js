require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log("Now listening to requests on port 4000");
});