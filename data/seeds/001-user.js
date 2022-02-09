/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user").then(function () {
    knex.raw("TRUNCATE TABLE user CASCADE");
    // Inserts seed entries
    return knex("user").insert([
      {
        email: "Clobberella@aol.com",
        first_name: "Turanga",
        password: "LittleNibbler3000",
        zip_code: 10011,
      },
      {
        email: "luck_of_the_fryish@yahoo.com",
        first_name: "Philip",
        password: "luckySevenleafClover777",
        zip_code: 10011,
      },
      {
        email: "bbrodriguez69@gmail.com",
        first_name: "Bender",
        password: "Pimpmobile!3002",
        zip_code: 10005,
      },
      {
        email: "awong79@marslink.web",
        first_name: "Amy",
        password: "yetispeaker5454",
        zip_code: 10015,
      },
      {
        email: "hermes_dexter_conrad@outlook.com",
        first_name: "Hermes",
        password: "limboChampion467!",
        zip_code: 10015,
      },
    ]);
  });
};
