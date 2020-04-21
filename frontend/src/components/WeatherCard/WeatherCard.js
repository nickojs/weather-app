import React from 'react';
import mockData from '../../mock.json';
import Location from './Location';

const WeatherCard = (props) => {
  const { main, location, weather } = mockData.data;
  console.log(main, location, weather);

  return (
    <div>
      <h1>Location</h1>
      <Location data={location} />
    </div>
  );
};

export default WeatherCard;
