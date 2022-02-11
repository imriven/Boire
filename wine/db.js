const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
  insertWine,
  updateWineProfile,
  removeWine
};


function insertWine(wine) {
  return db("wine").insert(wine);
}

function updateWineProfile(id, changes) {
  return db("wine").where({ id }).update(changes);
}

function removeWine(id) {
  return db("wine").where({ id }).del();
}

function getAll() {
  return db("wine");
}

function getById(id) {
  return db("wine").where({ id }).first();
}
