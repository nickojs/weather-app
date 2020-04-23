import React from 'react';

const WeatherInfo = ({ data }) =>
// feels_like: 298.88
// humidity: 73
// pressure: 1016
// temp: 297.66
// temp_max: 298.15
// temp_min: 297.15

  (
    <div>
      <h1>
        Temperatura:
        {data.temp}
        ºC
      </h1>
      <h1>
        Sensação térmica:
        {data.feels_like}
        ºC
      </h1>
      <h1>
        Mínima:
        {data.temp_min}
        {' '}
        ºC
      </h1>
      <h1>
        Máxima:
        {data.temp_max}
        {' '}
        ºC
      </h1>
    </div>
  );


export default WeatherInfo;
