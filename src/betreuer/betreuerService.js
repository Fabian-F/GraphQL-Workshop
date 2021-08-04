const { pool } = require('../config');

// +++++ Queries +++++
async function get(id){
    const response = await pool.query('SELECT * FROM betreuer WHERE id = $1', [id]);
    return response.rows[0];
}

async function getAll(){
    const response = await pool.query('SELECT * FROM betreuer');
    return response.rows;
}

// +++++ Mutations +++++
async function create(name, lastname, abteilung){
    await pool.query('INSERT INTO betreuer (name, lastname, abteilung) VALUES($1, $2, $3)', [name, lastname, abteilung]);
    return `Created Betreuer {name: ${name}, lastname: ${lastname}}`
}

async function update(id, name, lastname, abteilung) {
    console.log(JSON.stringify(arguments, null, 2));
    let query = [];
    if(name) {
        query.push(`name = '${name}'`);
    }
    if(lastname) {
        query.push(`lastname = '${lastname}'`);
    }
    if(abteilung) {
        query.push(`abteilung = '${abteilung}'`);
    }

    const queryString = `UPDATE azubi SET ` + query.join(", ") + ` WHERE id = ${id}`;
    console.log(queryString);

    let result = await pool.query(queryString);
    if(result.rowCount === 0) {
        throw Error(`Betreuer with {id: ${id}} not found`)
    }
    return `Updated Betreuer with {id: ${id}}`;
}

async function remove(id){
    await pool.query('DELETE FROM betreuer WHERE id = $1', [id]);
    return `Removed Betreuer with {id: ${id}}`;
}

module.exports = {
    get,
    getAll,
    create,
    update,
    remove
}