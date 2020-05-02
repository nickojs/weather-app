import React, { useState } from 'react';
import SearchBar from './containers/SearchBar/SearchBar';
import WeatherCard from './containers/Weather/WeatherCard';

const App = () => {
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

export default App;
