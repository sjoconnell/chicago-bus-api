const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// API
app.use('/api', routes)

module.exports = app