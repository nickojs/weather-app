const axios = require('axios').default;

class WeatherController { 
  constructor() { }

  async getWeatherByCity(req, res, next) {
    try {
      const { city, state, country } = req.body;
      const weatherRequest = await axios({
        method: 'get',
        url: `${process.env.WEATHER_URL}${city},${state},${country}
        &appid=${process.env.WEATHER_API_KEY}&lang=pt_br`,
        responseType: 'json'
      });
      const weatherData = weatherRequest.data;
      
      const payload = {
        location: { city, state },
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
