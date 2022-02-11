const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const wineRouter = require("./wine/router");
const userRouter = require("./user/router");
const tokenRouter = require("./token/router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/wine", wineRouter);
server.use("/api/user", userRouter);
server.use("/api/token", tokenRouter);

module.exports = server;
