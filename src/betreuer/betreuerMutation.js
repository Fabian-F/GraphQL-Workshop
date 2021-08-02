const graphql = require('graphql');
const betreuerService = require('./betreuerService');

const { GraphQLString, GraphQLID, GraphQLNonNull } = graphql;

// +++++ Mutations +++++
const add = {
    type: GraphQLString,
    args: {
        name: { type: GraphQLNonNull(GraphQLString) },
        lastname: { type: GraphQLNonNull(GraphQLString) },
        abteilung: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
        return await betreuerService.create(args.name, args.lastname, args.betreuer_id);
    }
}

const update = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        lastname: { type: GraphQLString },
        abteilung: { type: GraphQLString },
    },
    resolve: async (parent, args) => {
        return await betreuerService.update(args.id, args.name, args.lastname, args.betreuer_id);
    }
}

const remove = {
    type: GraphQLString,
    args: {
        id: { type: GraphQLNonNull(GraphQLID) }
    },
    resolve: async (parent, args) => {
        return await betreuerService.remove(args.id);
    }
}

// +++++ Exports +++++
module.exports = {
    add,
    update,
    remove
}