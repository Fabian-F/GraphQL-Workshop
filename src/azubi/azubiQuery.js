const graphql = require('graphql');
const types = require('../Types')
const azubiService = require('./azubiService');

const { GraphQLID, GraphQLList } = graphql;
const { AzubiType } = types;

// +++++ Queries +++++
const getAll = {
    type: GraphQLList(AzubiType),
    resolve: async () => {
        return await azubiService.getAll();
    }
};

const getOne = {
    type: AzubiType,
    args: { id: { type: GraphQLID } },
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