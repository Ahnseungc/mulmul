const mysql = require('mysql2');

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'user'
})

module.exports = db;