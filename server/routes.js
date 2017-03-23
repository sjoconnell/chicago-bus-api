const express = require('express');
const controller = require('./controller');
const routes = express();

// ROUTES
routes.get('/routes', controller.getRoutes)
routes.get('/directions/:route', controller.getDirections)
routes.get('/stops/:route/:direction', controller.getStops)
routes.get('/predictions/:route/:stopId', controller.getPredictions)

module.exports = routes