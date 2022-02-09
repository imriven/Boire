const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const wineRouter = require("./wine/router.js");
const userRouter = require("./user/router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/wine", wineRouter);
server.use("/api/user", userRouter);


module.exports = server;
