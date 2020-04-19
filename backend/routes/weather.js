const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weather');
const { body } = require('express-validator');
const validateResult = require('../helpers/validate-route');
const validateCity = require('../helpers/validate-city');

router.post('/', 
[
  body('city').not().isEmpty()
  .withMessage('Insira uma cidade'),
  body('state').isLength({ min: 2, max: 2 })
    .withMessage('UF possui dois dígitos')
], validateResult.default,
  body('city').custom(validateCity),
   validateResult.default,
   WeatherController.getWeatherByCity
);

router.post('/by-location', WeatherController.getWeatherByLocation);

module.exports = router;
