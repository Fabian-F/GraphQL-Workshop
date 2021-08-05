const graphql = require('graphql');
const { AzubiType } = require('../Types')
const azubiService = require('./azubiService');

const { GraphQLNonNull, GraphQLID, GraphQLList } = graphql;

// +++++ Queries +++++
const getAll = {
    type: GraphQLList(AzubiType),
    description: "Get all azubis in the database",
    resolve: async () => {
        return await azubiService.getAll();
    }
};

const getOne = {
    type: AzubiType,
    description: "Get one azubi by searching for the right id",
    args: { id: { type: GraphQLNonNull(GraphQLID) } },
    resolve: async (parent, {id}) => {
        const azubi = await azubiService.get(id);
        if(azubi === undefined) throw Error("ID not found");
        return azubi;
    }
}

// +++++ Exports +++++
module.exports = {
    getOne,
    getAll
}