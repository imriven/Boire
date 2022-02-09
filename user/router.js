const router = require("express").Router();
const db = require("./db");

router.get("/:id/wine", (req, res) => {
  db.getWineByUserId(req.params.id)
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
