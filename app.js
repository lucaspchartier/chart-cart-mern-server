require("dotenv").config();
const express = require("express");
const { MongoClient } = require('mongodb');
const cors = require("cors");

const app = express();

app.use(cors());

const client = new MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect(err => {
  client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

app.listen(4000, () => {
    console.log("Now listening to requests on port 4000");
});