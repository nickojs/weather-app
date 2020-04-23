import React, { useState } from 'react';
import SearchBar from '../components/SearchBar/SearchBar';
import WeatherCard from '../components/WeatherCard/WeatherCard';

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState();
  const getWeatherData = (data) => {
    setWeatherData(data);
  };

  return (
    <div>
      <SearchBar getWeatherData={getWeatherData} />
      <WeatherCard />
    </div>
  );
};

export default WeatherContainer;
