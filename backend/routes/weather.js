const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weather');

router.post('/', WeatherController.getWeatherByCity);

module.exports = router;
