const getWeather = require('../helpers/get-weather');

class WeatherController {
  static async getWeatherByCity(req, res, next) {
    try {
      const { city, state, country } = req.body;
      const weatherData = await getWeather(city, state, country);

      const payload = {
        location: {
          city: weatherData.name,
          state: state || null
        },
        weather: weatherData.weather[0],
        main: weatherData.main,
        wind: weatherData.wind
      };

      res.status(200).json({ data: payload });
    } catch (error) {
      next(error);
    }
  }

  static async getWeatherByLocation(req, res, next) {
    try {
      const { lat, lon } = req.body;
      const weatherData = await getWeather(lat, lon);

      const payload = {
        location: {
          city: weatherData.name,
          state: weatherData.sys.country
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
  }
}

module.exports = WeatherController;
