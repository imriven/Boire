const router = require("express").Router();
const db = require("./db");
const {
  validateLoggedIn,
} = require("../auth/middleware");

//check
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

//check
router.put(
  "/",
  validateLoggedIn,
  (req, res) => {
    db.updateWineProfile(Number(req.token.subject), req.body)
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

//check
router.delete(
  "/",
  validateLoggedIn,
  (req, res) => {
    db.removeWine(Number(req.token.subject))
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
