const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABSE_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
});



module.exports = sequelize;