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

const CommentType = new GraphQLObjectType({
    name: "Comment",
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        post: {
            type: PostType,
            resolve(parent, args) {
                return Post.findById(parent.postId);
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        comment: {
            type: CommentType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Comment.findById(args.id);
            }
        }
    }
});