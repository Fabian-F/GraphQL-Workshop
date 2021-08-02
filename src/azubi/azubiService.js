const { pool } = require('../config');

// +++++ Queries +++++
async function get(id){
    const response = await pool.query('SELECT * FROM azubi WHERE id = $1', [id]);
    return response.rows[0];
}

async function getAll(){
    const response = await pool.query('SELECT * FROM azubi');
    return response.rows;
}

async function getAllByBetreuer_id(id){
    const response = await pool.query(`SELECT * FROM azubi WHERE betreuer_id = ${id}`);
    return response.rows;
}

// +++++ Mutations +++++
async function create(name, lastname, betreuer_id){
    await pool.query('INSERT INTO azubi (name, lastname, betreuer_id) VALUES($1, $2, $3)', [name, lastname, betreuer_id]);
    return `Created Azubi {name: ${name}, lastname: ${lastname}}`
}

async function update(id, name, lastname, betreuer_id) {
    console.log(JSON.stringify(arguments, null, 2));
    let query = [];
    if(name) {
        query.push(`name = '${name}'`);
    }
    if(lastname) {
        query.push(`lastname = '${lastname}'`);
    }
    if(betreuer_id) {
        query.push(`betreuer_id = '${betreuer_id}'`);
    }

    const queryString = `UPDATE azubi SET ` + query.join(", ") + ` WHERE id = ${id}`;
    console.log(queryString);

    let result = await pool.query(queryString);
    if(result.rowCount === 0) {
        throw Error(`Azubi with {id: ${id}} not found`)
    }
    return `Updated Azubi with {id: ${id}}`;
}

async function remove(id){
    await pool.query('DELETE FROM azubi WHERE id = $1', [id]);
    return `Removed Azubi with {id: ${id}}`;
}

module.exports = {
    get,
    getAll,
    getAllByBetreuer_id,
    create,
    update,
    remove
}