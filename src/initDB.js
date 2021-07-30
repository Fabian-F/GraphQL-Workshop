const types = require('./Types');
const queries = require('./services/azubiService');
const { AzubiType } = types;
const { createAzubi } = queries;

var fakeDatabase = [
    { name:"Fabian", lastname: "Forster", id:1},
    { name:"Bastian", lastname: "Wenta", id:2},
    { name:"Alexander", lastname: "Klein", id:3}
]

fakeDatabase.forEach((azubi) => {
    createAzubi(azubi.id, azubi.name, azubi.lastname);
    console.log("Inserted: " + azubi.name);
})