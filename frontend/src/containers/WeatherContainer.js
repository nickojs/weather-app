import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const weatherHandler = (data) => setWeatherData(data);
  const loadingHandler = () => setLoading((prevState) => !prevState);

  return (
    <div>
      <SearchBar sendWeather={weatherHandler} toggleLoading={loadingHandler} />
      {loading ? <p>loading...</p>
        : <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default WeatherContainer;
