const router = require("express").Router();
const db = require("./db");
const {
  validateLoggedIn,
} = require("../auth/middleware");

router.get("/:id/wine", (req, res) => {
  db.getWineByUserId(req.params.id)
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "No wines exist" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

router.get("/following", validateLoggedIn, (req, res) => {
  db.getFollowersByUserId(req.token.subject)
    .then((result) => {
      if (!result) {
        res.status(404).json({ error: "No followers exist" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

//we recoded the one from above so we get the ID from the token instead
// router.get(
//   "/:id/following",
//   validateLoggedIn,
//   validateUserEditSelf,
//   (req, res) => {
//     db.getFollowersByUserId(req.params.id)
//       .then((result) => {
//         if (!result) {
//           res.status(404).json({ error: "No followers exist" });
//         } else {
//           res.status(200).json(result);
//         }
//       })
//       .catch((err) =>
//         res.status(500).json({ error: `Error connecting to database, ${err}` })
//       );
//   }
// );

router.put(
  "/:id",
  validateLoggedIn,
  (req, res) => {
    db.updateUserProfile(Number(req.params.id), req.body)
      .then((result) => {
        if (result === 1) {
          res.status(202).send();
        } else {
          res.status(500).json({ error: "Error Updating Profile" });
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
        res.status(404).json({ error: "This user doesn't exist" });
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
        res.status(404).json({ error: "No users exist" });
      } else {
        res.status(200).json(result);
      }
    })
    .catch((err) =>
      res.status(500).json({ error: `Error connecting to database, ${err}` })
    );
});

module.exports = router;
