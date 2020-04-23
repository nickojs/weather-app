import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);
  const weatherHandler = (data) => {
    console.log(data);
    setWeatherData(data);
  };

  return (
    <div>
      <SearchBar sendWeather={weatherHandler} />
      <WeatherCard weatherData={weatherData} />
    </div>
  );
};

export default WeatherContainer;
