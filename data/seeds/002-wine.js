

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("wine").then(function () {
    knex.raw("TRUNCATE TABLE wine CASCADE");
    // Inserts seed entries
    return knex("wine").insert([
      {
        name: "Mascota Vineyards Unanime Malbec",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269484/Boire/Unanime-Malbec_bnuuzb.jpg",
        year: 2017,
        color: "red",
        vineyard: "Mascota Vineyards",
        type: "Malbec",
      },
      {
        name: "Buttercream Chardonnay",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Buttercream-Chardonnay_rocgqa.jpg",
        color: "white",
        vineyard: "Cream Family Wines",
        type: "Chardonnay",
      },
      {
        name: "Tesoro Della Regina Chianti Classico",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Tesoro-Della-Regina_uvwjvs.jpg",
        year: 2019,
        color: "red",
        vineyard: "Tesoro Della Regina",
        type: "Sangiovese",
      },
      {
        name: "Armani Pinot Grigio Friuli",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Armani-Pinot-Grigio-Friuli_mnj9qa.jpg",
        year: 2019,
        color: "white",
        vineyard: "Albino Armani Winery",
        type: "Pinot Gris",
      },
      {
        name: "Double Black Cabernet Sauvignon Paso Robles",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Double-Black_l0cbli.jpg",
        color: "red",
        vineyard: "Castoro Cellars",
        type: "Cabernet Sauvignon",
      },
      {
        name: "Ch Gigery Provence Rose",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Ch-Gigery-Provence-Rose_hx1whr.jpg",
        year: 2020,
        color: "rose",
        vineyard: "Château Gigery Côtes de Provence",
        type: "Rose Blend",
      },
      {
        name: "Ed Edmundo Cabernet Sauvignon",
        label_image:
          "https://res.cloudinary.com/dyrhhf6i8/image/upload/v1644269483/Boire/Ed-Edmundo-Cabernet-Sauvignon_qmmapw.jpg",
        year: 2020,
        color: "red",
        vineyard: "Grupo Penaflor Winery",
        type: "Cabernet Sauvignon",
      },
    ]);
  });
};
