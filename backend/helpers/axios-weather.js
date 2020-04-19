const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/weather',
  responseType: 'json'
});

module.exports = instance;
