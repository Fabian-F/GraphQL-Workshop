const graphql = require('graphql');
const azubiMutation = require('./azubi/azubiMutation');

const { GraphQLObjectType } = graphql;

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAzubi: azubiMutation.add,
        updateAzubi: azubiMutation.update,
        removeAzubi: azubiMutation.remove
    }
});

module.exports = Mutation;