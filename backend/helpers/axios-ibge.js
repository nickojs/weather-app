const axios = require('axios').default;

const instance = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1',
  responseType: 'json'
});

module.exports = instance;
