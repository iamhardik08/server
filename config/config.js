const Sequelize = require('sequelize');

const sequelize = new Sequelize('maindb', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});



module.exports = sequelize;