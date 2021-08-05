const graphql = require('graphql');
const betreuerService = require('./betreuer/betreuerService');
const azubiService = require('./azubi/azubiService');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const AzubiType = new GraphQLObjectType({
    name: 'Azubi',
    description: "Azubi object which represents a trainee",
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        betreuer_id: { type: GraphQLID },
        betreuer: {
            type: BetreuerType,
            resolve: (azubi) => {
                return betreuerService.get(azubi.betreuer_id);
            }
        }
    })
});

const BetreuerType = new GraphQLObjectType({
    name: 'Betreuer',
    description: "Betreuer object which represents a supervisor",
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        abteilung: { type: GraphQLString },
        azubis: {
            type: GraphQLList(AzubiType),
            resolve: (betreuer) => {
                return azubiService.getAllByBetreuer_id(betreuer.id);
            }
        }
    })
});

module.exports = {
    AzubiType: AzubiType,
    BetreuerType: BetreuerType
}