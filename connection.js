var mysql = require('mysql');
var cnn = mysql.createPool({
    // host: 'localhost',
    // user: 'root',
    // password: '',
    // database: 'tictechtoe'

    host: 'sql12.freemysqlhosting.net',
    user: 'sql12259968',
    password: 'BSMgcvGPsn',
    database: 'sql12259968'
});
module.exports = cnn;