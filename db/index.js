const pg = require('pg');
const { Client } = pg
const client = new Client({
    user: '',
    password: '',
    host: 'localhost',
    port: 5432,
    database: 'Classroom_Manager',
})

module.exports = {
    query: (text, params) => client.query(text, params),
};