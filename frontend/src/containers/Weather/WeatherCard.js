import React from 'react';
import { useSelector } from 'react-redux';
import Location from '../../components/WeatherCard/Location';
import Description from '../../components/WeatherCard/Description';
import WeatherInfo from '../../components/WeatherCard/WeatherInfo';
import Loader from '../../components/UI/Loader';
import * as S from './styles';

const WeatherCard = () => {
  const { weather, loadingWeather } = useSelector((state) => state);

  let weatherC = null;
  if (weather) {
    weatherC = (
      <S.WeatherContainer>
        <Location data={weather.location} />
        <Description data={weather.weather} />
        <WeatherInfo data={weather.main} />
      </S.WeatherContainer>
    );
  }
  return (
    <>
      {weatherC}
      <Loader status={loadingWeather} />
    </>
  );
};


export default WeatherCard;
