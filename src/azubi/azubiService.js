const { pool } = require('../config');

const get = async (id) => {
    const response = await pool.query('SELECT * FROM azubi WHERE id = $1', [id]);
    return response.rows[0];
}

const getAll = async () => {
    const response = await pool.query('SELECT * FROM azubi');
    return response.rows;
}

const create = async (name, lastname, betreuer_id) => {
    await pool.query('INSERT INTO azubi (name, lastname, betreuer_id) VALUES($1, $2, $3)', [name, lastname, betreuer_id]);
    return `Created Azubi {name: ${name}, lastname: ${lastname}}`
}

async function update(id, name, lastname, betreuer_id) {
    await pool.query('UPDATE azubi SET name = $2, lastname = $3, betreuer_id = $4 WHERE id = $1', [id, name, lastname, betreuer_id]);
    return `Updated Azubi with {id: ${id}} to {name: ${name}, lastname: ${lastname}, betreuer: ${betreuer_id}}`
}

const remove = async (id) => {
    await pool.query('DELETE FROM azubi WHERE id = $1', [id]);
    return `Removed Azubi with {id: ${id}}`;
}

module.exports = {
    get,
    getAll,
    create,
    update,
    remove
}