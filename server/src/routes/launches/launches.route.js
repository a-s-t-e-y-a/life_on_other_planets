const express = require("express");
const { getAllLaunches, addnew } = require("./launches.controller");
const launchesRouter = express.Router();
launchesRouter.get("/launch", getAllLaunches);
launchesRouter.post("/launch", addnew);
module.exports = launchesRouter;
