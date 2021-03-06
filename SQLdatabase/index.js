const Sequelize = require('sequelize');
const { dbName, user, pass } = require('../config/db-config');

const db = new Sequelize(dbName, user, pass, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

module.exports = db;
