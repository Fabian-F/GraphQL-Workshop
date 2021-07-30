const graphql = require('graphql');
const types = require('./Types')
const azubiService = require('./services/azubiService');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLSchema, GraphQLList } = graphql;
const { AzubiType } = types;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        azubi: {
            type: AzubiType,
            args: { id: { type: GraphQLID } },
            resolve: async (parent, {id}) => {
                var azubi = await azubiService.get(id);
                if(azubi === undefined) throw Error("ID not found");
                return azubi;
            }
        },
        azubis: {
            type: GraphQLList(AzubiType),
            resolve: async () => {
                var azubis = await azubiService.getAll();
                return azubis;
            }
        }
    }
});

module.exports = RootQuery;