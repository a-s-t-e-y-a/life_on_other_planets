const express = require('express');
const planetRouter = express.Router();
const getallplanets = require('./planets.controller')
planetRouter.get('/planets', getallplanets);
module.exports = planetRouter