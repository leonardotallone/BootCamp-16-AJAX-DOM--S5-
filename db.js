const Sequelize = require("sequelize");

const db = new Sequelize("trello_card", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
