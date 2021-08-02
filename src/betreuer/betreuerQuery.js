const graphql = require('graphql');
const { BetreuerType } = require('../Types')
const betreuerService = require('./betreuerService');

const { GraphQLID, GraphQLList } = graphql;

// +++++ Queries +++++
const getAll = {
    type: GraphQLList(BetreuerType),
    resolve: async () => {
        return await betreuerService.getAll();
    }
};

const getOne = {
    type: BetreuerType,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, {id}) => {
        const betreuer = await betreuerService.get(id);
        if(betreuer === undefined) throw Error("ID not found");
        return betreuer;
    }
}

// const getOneByParent = {
//     type: BetreuerType,
//     resolve: (azubi) => {
//         return betreuerService.get(azubi.betreuer_id);
//     }
// }

// +++++ Exports +++++
module.exports = {
    getOne,
    //getOneByParent,
    getAll
}