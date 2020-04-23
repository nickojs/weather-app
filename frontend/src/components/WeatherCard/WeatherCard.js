import React from 'react';
import Location from './Location';
import Description from './Description';
import WeatherInfo from './WeatherInfo';
import * as S from './styles';

const WeatherCard = ({ weatherData }) => (
  weatherData ? (
    <S.WeatherContainer>
      <Location data={weatherData.location} />
      <Description data={weatherData.weather} />
      <WeatherInfo data={weatherData.main} />
    </S.WeatherContainer>
  ) : null
);

export default WeatherCard;
