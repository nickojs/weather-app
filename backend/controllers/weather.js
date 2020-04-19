const getWeather = require('../helpers/get-weather');

class WeatherController { 
  constructor() { }

  async getWeatherByCity(req, res, next) {
    try {
      const { city, state, country } = req.body;
      const weatherData = await getWeather(city, state, country);

      const payload = {
        location: { city, state },
        weather: weatherData.weather[0], 
        main: weatherData.main, 
        wind: weatherData.wind
      };

      res.status(200).json({ data: payload });
    } catch (error) {
      next(error);
    }
  };

  async getWeatherByLocation(req, res, next) {
    try {
      const { lat, lon } = req.body;
      const weatherData = await getWeather(lat, lon);
  
      const payload = {
        location: {
          city: weatherData.name,
          country: weatherData.sys.country
        },
        weather: weatherData.weather[0], 
        main: weatherData.main, 
        wind: weatherData.wind
      };
  
      res.status(200).json({ data: payload });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };

}

module.exports = new WeatherController();
