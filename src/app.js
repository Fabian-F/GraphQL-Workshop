const express = require('express');
var { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema } = require('graphql');
const query = require('./query');
const mutation = require('./mutation');
//const initDB = require('./initDB');

const app = express();

var schema = new GraphQLSchema({
    query: query,
    mutation: mutation
});

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000/graphql');
});