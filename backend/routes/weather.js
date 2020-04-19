const express = require('express');
const router = express.Router();
const WeatherController = require('../controllers/weather');
const { body } = require('express-validator');
const validate = require('../helpers/validate-route');
const axios = require('axios');

router.post('/', 
[
  body('city').not().isEmpty()
  .withMessage('Insira uma cidade'),
  body('state').isLength({ min: 2, max: 2 })
    .withMessage('UF possui dois dígitos')
], validate.default,
  body('city').custom(async (_, { req }) => {
    try {
      const { city, state } = req.body;
      const thisCity = city.toUpperCase();
      const stateList = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
      const stateListData = await stateList.data;
  
      const currentState = stateListData.filter(uf => uf.sigla === state);
      const currentStateId = currentState[0].id;
  
      const citiesByState = await axios.get(`
        https://servicodados.ibge.gov.br/api/v1/localidades/estados/${currentStateId}/municipios
      `);
      const citiesByStateData = citiesByState.data.map(city => city.nome.toUpperCase());
  
      const findCity = citiesByStateData.find(c => c === thisCity);
      
      if(!findCity) {
        return Promise.reject(`Cidade '${city}' não encontrada no estado ${state}`)
      }
    } catch (error) {
      throw new Error(error);
    }
  }),
   validate.default,
   WeatherController.getWeatherByCity
);

router.post('/by-location', WeatherController.getWeatherByLocation);

module.exports = router;
