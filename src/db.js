const mysql = require('mysql2/promise');
const connectionOptions = {
    host: "localhost",
    port: 3306,
    database: "db_mondragon_app",
    user: "root",
    password:"duberly2004"
};

const pool = mysql.createPool(connectionOptions);

const connectToMySQL = async () => {
    try {
        await pool.getConnection();

        console.log('MySQL database connected!');
    } catch (err) {
        console.log('MySQL database connection error!');
        process.exit(1);
    }
};

connectToMySQL().then();

module.exports = pool;