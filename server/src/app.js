const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");
const morgan = require("morgan");
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan('combined'))
const planetRouter = require("./routes/planets/planets.router");
const launchesRouter = require("./routes/launches/launches.route");
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

app.use(planetRouter);
app.use(launchesRouter); 
module.exports = app;
