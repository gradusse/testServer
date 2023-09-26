const Pool = require('pg').Pool;
const pool = new Pool({
    user: "postgres",
    password: '570926',
    host: "localhost",
    port: 5432,
    database:
});


module.exports = pool