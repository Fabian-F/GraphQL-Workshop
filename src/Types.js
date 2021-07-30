const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString,
    GraphQLID } = graphql;

const AzubiType = new GraphQLObjectType({
    name: 'Azubi',
    fields: () => ({
        id: { type: GraphQLID  },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString }
    })
});

module.exports = {
    AzubiType: AzubiType
}