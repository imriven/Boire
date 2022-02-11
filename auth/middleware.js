const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");




const validateLoggedIn = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const authToken = authHeader.split(" ")[1];
    jwt.verify(authToken, secrets.jwtSecret, (err, token) => {
      if (err) {
        return res.status(403).send();
      }
      req.token = token;
      next();
    });
  } else {
    res.status(401).send();
  }
}


// I don't think we need this middleware?
// const validateUserEditSelf = (req, res, next) => {
//   if (req.token.subject !== Number(req.params.id)) {
//     return res.status(403).json({ error: "User only able to edit themselves" });
//   }
//   next();
// };

module.exports = {
  validateLoggedIn,
  validateUserEditSelf,
}