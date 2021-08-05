const graphql = require('graphql');
const { BetreuerType } = require('../Types')
const betreuerService = require('./betreuerService');

const { GraphQLNonNull, GraphQLID, GraphQLList } = graphql;

// +++++ Queries +++++
const getAll = {
    type: GraphQLList(BetreuerType),
    description: "Get all betreuer in the database",
    resolve: async () => {
        return await betreuerService.getAll();
    }
};

const getOne = {
    type: BetreuerType,
    description: "Get one betreuer by searching for the right id",
    args: { id: { type: GraphQLNonNull(GraphQLID) } },
    resolve: async (parent, {id}) => {
        const betreuer = await betreuerService.get(id);
        if(betreuer === undefined) throw Error("ID not found");
        return betreuer;
    }
}

// +++++ Exports +++++
module.exports = {
    getOne,
    getAll
}