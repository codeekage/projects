const graphql = require('graphql');
const VideoModel = require('../models/video.model');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull
} = graphql;


const VideoType = new GraphQLObjectType({
    name: 'Video',
    fields: () => ({
        id: { type: GraphQLID },
        name: {type : GraphQLString},
        link: {type: GraphQLString},
        description: {type: GraphQLString},
        category: {type : GraphQLString},
        status: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name : 'RootQueryType',
    fields:{
        video:{
            type: VideoType,
            args: {id : {type : GraphQLID}},
            resolve(parent, args){
                return VideoModel.findById(args.id)
            },
            
        },
        videos:{
            type : new GraphQLList(VideoType),
            resolve(parent, args){
                return VideoModel.find({})
            }
        }
    }
});


const Mutation = new GraphQLObjectType({
    name : 'Mutation',
    fields: {
        addVideo: {
            type: VideoType,
            args: {
                name: {type : new GraphQLNonNull(GraphQLString)},
                link: {type: new GraphQLNonNull(GraphQLString)},
                description: {type: new GraphQLNonNull(GraphQLString)},
                category: {type : new GraphQLNonNull(GraphQLString)},
                status: {type : new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args){
                let video = {
                    name: args.name,
                    link: args.link,
                    description: args.description,
                    category: args.category,
                    status: args.status
                };
                return VideoModel.create(video);
            }
        },
    
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})