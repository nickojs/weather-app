class WeatherController { 
  constructor() { }

  async getWeatherByCity(req, res, next) {
    try {
      const { city, state, country } = req.body;
      const weatherData = await fetch(process.env.WEATHER_URL + 
        `${city},${state},${country}` + '&appid=' + process.env.WEATHER_API_KEY)
      res.status(200).json({ weatherData });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
}

module.exports = WeatherController;
