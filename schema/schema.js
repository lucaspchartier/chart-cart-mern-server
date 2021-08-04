const graphql = require("graphql");
const Post = require("../models/post");
const Comment = require("../models/comment");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        comments: {
            
        }
    })
});