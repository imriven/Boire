const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const wineRouter = require("./wine/router.js");
const userRouter = require("./user/router");
// const muscleRouter = require("./muscle/router");
// // const programRouter = require("./program/router");
// // const setRouter = require("./set/router");
// // const typeRouter = require("./type/router");
// const userRouter = require("./user/router");
// // const workoutRouter = require("./workout/router");
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use("/api/wine", wineRouter);
server.use("/api/user", userRouter);
// // server.use("/api/muscle", muscleRouter);
// // server.use("/api/program", programRouter);
// // server.use("/api/set", setRouter);
// // server.use("/api/type", typeRouter);
// server.use("/api/user", userRouter);
// // server.use("/api/workout", workoutRouter);

module.exports = server;
