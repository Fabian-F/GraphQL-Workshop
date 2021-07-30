const graphql = require('graphql');
const types = require('./Types')
const azubiService = require('./services/azubiService');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList, GraphQLNonNull } = graphql;
const { AzubiType } = types;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAzubi: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                lastname: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                return await azubiService.create(args.id, args.name, args.lastname);
            }
        },
        updateAzubi: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                lastname: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve: async (parent, args) => {
                return await azubiService.update(args.id, args.name, args.lastname);
            }
        },
        removeAzubi: {
            type: GraphQLString,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve: async (parent, args) => {
                return await azubiService.remove(args.id);
            }
        }
    }
});

module.exports = Mutation;