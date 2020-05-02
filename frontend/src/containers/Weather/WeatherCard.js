import React from 'react';
import Location from '../../components/WeatherCard/Location';
import Description from '../../components/WeatherCard/Description';
import WeatherInfo from '../../components/WeatherCard/WeatherInfo';
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
