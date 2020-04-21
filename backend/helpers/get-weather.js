const axios = require('./axios-weather');
const ErrorHandler = require('../models/http-error');

// decides which api to call based on args quantity
const getWeather = async (...args) => {
  let params;

  if (args.length === 3) {
    params = `?q=${args.map((a) => encodeURIComponent(a)).join(',')}`;
  }

  if (args.length === 2) {
    params = `?lat=${args[0]}&lon=${args[1]}`;
  }

  try {
    const weather = await axios.get(
      `${params}&appid=${process.env.API_KEY}&lang=pt_br`
    );
    return weather.data;
  } catch (error) {
    throw new ErrorHandler('Couldn\'t fetch data', 404);
  }
};

module.exports = getWeather;
