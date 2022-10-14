const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({
    origin: 'http://localhost:3001'
}));
const planetRouter =require('./routes/planets/planets.router')
app.use(express.json());
app.use(planetRouter);
module.exports = app;