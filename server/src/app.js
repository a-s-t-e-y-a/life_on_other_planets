const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const planetRouter = require("./routes/planets/planets.router");
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
app.use(planetRouter);
module.exports = app;
