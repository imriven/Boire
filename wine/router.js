const router = require("express").Router();
const db = require("./db");
const {
  validateLoggedIn,
} = require("../utils/middleware");


router.post("/", validateLoggedIn, (req, res) => {
const wine = req.body
  db.insertWine(wine)
    .then((result) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ error: "error connecting to database" });
    });
});


router.put(
  "/:id",
  validateLoggedIn,
  (req, res) => {
    db.updateWineProfile(Number(req.params.id), req.body)
      .then((result) => {
        if (result === 1) {
          res.status(202).send();
        } else {
          res.status(500).json({ error: "Error Updating Wine Profile" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "error connecting to database" });
      });
  }
);


router.delete(
  "/:id",
  validateLoggedIn,
  (req, res) => {
    db.removeWine(Number(req.params.id))
      .then((result) => {
        if (result === 1) {
          res.status(202).send();
        } else {
          res.status(500).json({ error: "error deleting wine profile" });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: "error connecting to database" });
      });
  }
);

router.get("/:id", (req, res) => {
  db.getById(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "No exercises exist" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

router.get("/", (req, res) => {
  db.getAll()
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "No exercises exist" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

module.exports = router;
