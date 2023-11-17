const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    dialect: 'postgres',
    port: process.env.DATABASE_PORT,
    username: process.env.DATABASE_USER,
    password:  process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,

    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true, 
        createdAt: 'created_at',
        upadateddAt: 'updated_at',
    }
}