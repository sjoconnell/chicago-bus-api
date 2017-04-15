const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const cors = require('cors')
const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors)

// API
app.use('/api', routes)

module.exports = app