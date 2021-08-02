const graphql = require('graphql');
const azubiMutation = require('./azubi/azubiMutation');
const betreuerMutation = require('./betreuer/betreuerMutation');

const { GraphQLObjectType } = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAzubi: azubiMutation.add,
        updateAzubi: azubiMutation.update,
        removeAzubi: azubiMutation.remove,
        addBetreuer: betreuerMutation.add,
        updateBetreuer: betreuerMutation.update,
        removeBetreuer: betreuerMutation.remove
    }
});

module.exports = Mutation;