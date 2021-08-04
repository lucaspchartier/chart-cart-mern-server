const graphql = require("graphql");
const Post = require("../models/post");
const Comment = require("../models/comment");

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = graphql;

const PostType = new GraphQLObjectType({
    name: "Post",
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        comments: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Comment.find({ postId: parent.id });
            }
        }
    })
});