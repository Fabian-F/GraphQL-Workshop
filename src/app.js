const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const query = require('./query');
const mutation = require('./mutation');

const app = express();

const schema = new GraphQLSchema({
    query: query,
    mutation: mutation,
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true,
}));

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000/graphql');
});