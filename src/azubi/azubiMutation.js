const graphql = require('graphql');
const azubiService = require('./azubiService');

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

// +++++ Mutations +++++
const add = {
    type: GraphQLString,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
        betreuer_id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve: async (parent, args) => {
        return await azubiService.create(args.name, args.lastname, args.betreuer_id);
    }
}

const update = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        betreuer_id: { type: GraphQLID },
    },
    resolve: async (parent, args) => {
        return await azubiService.update(args.id, args.name, args.lastname, args.betreuer_id);
    }
}

const remove = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve: async (parent, args) => {
        return await azubiService.remove(args.id);
    }
}

// +++++ Exports +++++
module.exports = {
    add,
    update,
    remove
}