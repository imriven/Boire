const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
  getWineByUserId,
  getFollowersByUserId,
};

function getFollowersByUserId(id) {
  return db("following as f") 
    .join("user as u", "u.id", "f.following_id")
    .select("u.id", "u.first_name")
    .where("f.follower_id", id);
}

function getWineByUserId(id) {
  return db("user_wine as u")
    .join("wine as w", "w.id", "u.wine_id")
    .select("w.*")
    .where("u.user_id", id);
}

//sql quick guide
// function name(id) {
//   return db("(join table) as j")
//     .join("second table as s", "s.id", "j.s_id")
//     .select("fields from second table.*")
//     .where("j.id", id);
// }

function getAll() {
  return db("user");
}

function getById(id) {
  return db("user").where({ id }).first();
}
