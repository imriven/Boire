/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user").del().then(function () {
    // Inserts seed entries
    return knex("user").insert([
      {
        email: "Clobberella@aol.com",
        first_name: "Turanga",
        password:
          "$2a$14$wOY2NnKM7qwY7ik1QnsViOGCRp2JX9o7QO.MCAZqL4z/rMnQcaS2e", // LittleNibbler3000
        zip_code: 10011,
      },
      {
        email: "luck_of_the_fryish@yahoo.com",
        first_name: "Philip",
        password:
          "$2a$14$yqnGuyPGx80QJ5oDTxzUduxg3pY2N/CU/6paqcOLJj7ovEH4.RJC2", // luckySevenleafClover777
        zip_code: 10011,
      },
      {
        email: "bbrodriguez69@gmail.com",
        first_name: "Bender",
        password:
          "$2a$14$rPqoCIRTh0mxVVWidsNOFO082i4VdTUtuHMj.fSNBJvfJ0qL90UeO", // Pimpmobile!3002
        zip_code: 10005,
      },
      {
        email: "awong79@marslink.web",
        first_name: "Amy",
        password:
          "$2a$14$ces5O6xTqj5z7H3tw1EQLOZYb27PKztNEIdNTwnNgYDj96CGowZQq", // yetispeaker5454
        zip_code: 10015,
      },
      {
        email: "hermes_dexter_conrad@outlook.com",
        first_name: "Hermes",
        password:
          "$2a$14$yE9jSlIkUDVh12QWmBY8gu.01J5PXEl0i7SxZWcypeRqmvIoFU0A2467!", // limboChampion467!
        zip_code: 10015,
      },
    ]);
  });
};
