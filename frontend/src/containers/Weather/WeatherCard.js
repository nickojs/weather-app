import React from 'react';
import { useSelector } from 'react-redux';
import Location from '../../components/WeatherCard/Location';
import Description from '../../components/WeatherCard/Description';
import WeatherInfo from '../../components/WeatherCard/WeatherInfo';
import * as S from './styles';

const WeatherCard = () => {
  const weatherData = useSelector((state) => state.weather);
  let weatherComponent = null;
  if (weatherData) {
    weatherComponent = (
      <S.WeatherContainer>
        <Location data={weatherData.location} />
        <Description data={weatherData.weather} />
        <WeatherInfo data={weatherData.main} />
      </S.WeatherContainer>
    );
  }
  return weatherComponent;
};


export default WeatherCard;
