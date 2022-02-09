/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("following").del().then(function () {
    // Inserts seed entries
    return knex("following").insert([
      {
        follower_id: 1,
        following_id: 2,
      },
      {
        follower_id: 1,
        following_id: 3,
      },
      {
        follower_id: 1,
        following_id: 5,
      },
      {
        follower_id: 2,
        following_id: 1,
      },
      {
        follower_id: 2,
        following_id: 3,
      },
      {
        follower_id: 2,
        following_id: 4,
      },
      {
        follower_id: 2,
        following_id: 5,
      },
      {
        follower_id: 3,
        following_id: 1,
      },
      {
        follower_id: 3,
        following_id: 2,
      },
      {
        follower_id: 4,
        following_id: 2,
      },
      {
        follower_id: 4,
        following_id: 3,
      },
    ]);
  });
};
