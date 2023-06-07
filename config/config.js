const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_postgres_auth', 'darshantrivedi14', 'darshan_14', {
    host: 'localhost',
    dialect: 'postgres',
});



module.exports = sequelize;