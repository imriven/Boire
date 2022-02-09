const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
  getWineByUserId,
};

function getWineByUserId(id) {
  return db("user_wine as u")
    .join("wine as w", "w.id", "u.wine_id")
    .select("w.*")
    .where("u.user_id", id);
}

function getAll() {
  return db("user");
}

function getById(id) {
  return db("user").where({ id }).first();
}
