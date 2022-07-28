const db = require("../config/dbConfig");

module.exports = {
  getAll,
  getById,
  getWinesByUserId,
  getWineByUserId,
  getFollowersByUserId,
  getByEmail,
  insertUser,
  updateUserProfile,
  removeUser,
  insertFollow,
  removeFollow,
  upsertUserWine,
};

function getFollowersByUserId(id) {
  return db("following as f")
    .join("user as u", "u.id", "f.following_id")
    .select("u.id", "u.name")
    .where("f.follower_id", id);
}

function insertFollow(user, following) {
  return db("following").insert({ follower_id: user, following_id: following });
}

function removeFollow(user, following) {
  return db("following")
    .where({ follower_id: user, following_id: following })
    .del();
}

function getByEmail(email) {
  return db("user").where({ email }).first();
}

function getWinesByUserId(id) {
  return db("user_wine as u")
    .join("wine as w", "w.id", "u.wine_id")
    .select("w.*")
    .where("u.user_id", id);
}

function getWineByUserId(uid, wid) {
  return db("user_wine as u")
    .join("wine as w", "w.id", "u.wine_id")
    .select("u.*")
    .where({ "u.user_id": uid, "u.wine_id": wid })
    .first();
}

function upsertUserWine(userWine) {
  return db("user_wine")
    .insert(userWine)
    .onConflict(["user_id", "wine_id"])
    .merge()
    .returning("*");
}

//sql quick guide
// function name(id) {
//   return db("(join table) as j")
//     .join("second table as s", "s.id", "j.s_id")
//     .select("fields from second table.*")
//     .where("j.id", id);
// }

function insertUser(user) {
  return db("user").insert(user);
}

function updateUserProfile(id, changes) {
  return db("user").where({ id }).update(changes);
}

function getAll() {
  return db("user");
}

function getById(id) {
  return db("user").where({ id }).first();
}

function removeUser(id) {
  return db("user").where({ id }).del();
}
