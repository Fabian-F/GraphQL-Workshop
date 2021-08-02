const graphql = require('graphql');
const azubiController = require('./azubi/azubiQuery');

const { GraphQLObjectType } = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        azubi: azubiController.getOne,
        azubis: azubiController.getAll,
    }
});

module.exports = RootQuery;