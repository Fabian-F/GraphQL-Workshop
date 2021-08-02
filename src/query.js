const graphql = require('graphql');
const azubiQuery = require('./azubi/azubiQuery');
const betreuerQuery = require('./betreuer/betreuerQuery');

const { GraphQLObjectType } = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        azubi: azubiQuery.getOne,
        azubis: azubiQuery.getAll,
        betreuer: betreuerQuery.getOne,
        allBetreuer: betreuerQuery.getAll
    }
});

module.exports = RootQuery;