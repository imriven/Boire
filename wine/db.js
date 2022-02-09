const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
};

function getAll() {
  return db("wine");
}

function getById(id) {
  return db("wine").where({ id }).first();
}
