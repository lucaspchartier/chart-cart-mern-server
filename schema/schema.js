const graphql = require("graphql");
const Post = require("../models/post");
const Comment = require("../models/comment");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;