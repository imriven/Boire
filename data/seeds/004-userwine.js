

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("user_wine")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("user_wine").insert([
        {
          user_id: 1,
          wine_id: 1,
          favorite: true,
          try: false,
          rating: 5,
          notes: "tangy, oak",
          drunk: true,
        },
        {
          user_id: 1,
          wine_id: 5,
          favorite: false,
          try: true,
          rating: 5,
          drunk: false,
        },
        {
          user_id: 2,
          wine_id: 3,
          favorite: false,
          try: true,
          rating: 2,
          drunk: true,
        },
        {
          user_id: 2,
          wine_id: 4,
          favorite: true,
          try: false,
          rating: 4,
          notes: "smokey, bright",
          drunk: true,
        },
        {
          user_id: 3,
          wine_id: 1,
          favorite: false,
          try: true,
          drunk: false,
        },
        {
          user_id: 4,
          wine_id: 1,
          favorite: false,
          try: true,
          rating: 1,
          notes: "gross",
          drunk: true,
        },
        {
          user_id: 4,
          wine_id: 2,
          favorite: true,
          try: true,
          rating: 5,
          notes: "light, citrus",
          drunk: true,
        },
        {
          user_id: 5,
          wine_id: 5,
          favorite: false,
          try: true,
          drunk: false,
        },
      ]);
    });
};
