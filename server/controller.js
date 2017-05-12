const axios = require('axios');
const cta_url = 'http://ctabustracker.com/bustime/api/v2'

exports.getRoutes = (req, res, next) => {
  axios.get(`${cta_url}/getroutes?key=${process.env.CTA_KEY}&format=json`)
    .then((response) => {
      res.json(response.data['bustime-response'])
    })
    .catch((error) => console.error('axios error', error))
}

exports.getDirections = (req, res, next) => {
  axios.get(`${cta_url}/getdirections?key=${process.env.CTA_KEY}&rt=${req.params.route}&format=json`)
    .then((response) => {
      res.json(response.data['bustime-response'])
    })
    .catch((error) => console.error('axios error', error))
}

exports.getStops = (req, res, next) => {
  axios.get(`${cta_url}/getstops?key=${process.env.CTA_KEY}&rt=${req.params.route}&dir=${req.params.direction}&format=json`)
    .then((response) => {
      res.json(response.data['bustime-response'])
    })
    .catch((error) => console.error('axios error', error))
}

exports.getPredictions = (req, res, next) => {
  axios.get(`${cta_url}/getpredictions?key=${process.env.CTA_KEY}&rt=${req.params.route}&stpid=${req.params.stopId}&format=json`)
    .then((response) => {
      res.json(response.data['bustime-response'])
    })
    .catch((error) => console.error('axios error', error)) 
}