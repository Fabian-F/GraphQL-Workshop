const { pool } = require('../config');

const get = async (id) => {
    var response = await pool.query('SELECT * FROM azubi WHERE id = $1', [id]);
    return response.rows[0];
}

const getAll = async () => {
    var response = await pool.query('SELECT * FROM azubi');
    return response.rows;
}

const create = async (id, name, lastname) => {
    await pool.query('INSERT INTO azubi (id, name, lastname) VALUES($1, $2, $3)', [id, name, lastname]);
    return `Created Azubi {id: ${id}, name: ${name}, lastname: ${lastname}}`
}

const update = async (id, name, lastname) => {
    await pool.query('UPDATE azubi SET name = $2, lastname = $3 WHERE id = $1', [id, name, lastname]);
    return `Updated Azubi with {id: ${id}} to {name: ${name}, lastname: ${lastname}}`
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
