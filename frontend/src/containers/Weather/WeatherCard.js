import React from 'react';
import { useSelector } from 'react-redux';
import Location from '../../components/WeatherCard/Location';
import Description from '../../components/WeatherCard/Description';
import WeatherInfo from '../../components/WeatherCard/WeatherInfo';
import Loader from '../../components/UI/Loader';
import ErrorMessage from '../../components/UI/ErrorMessage';
import * as S from './styles';

const WeatherCard = () => {
  const { weather, loading, error } = useSelector((state) => state.weather);

  let weatherComponent = null;
  if (weather) {
    weatherComponent = (
      <S.WeatherContainer>
        <Location data={weather.location} />
        <Description data={weather.weather} />
        <WeatherInfo data={weather.main} />
      </S.WeatherContainer>
    );
  }
  return (
    <S.Container>
      {weatherComponent}
      <Loader status={loading} />
      <ErrorMessage error={error} />
    </S.Container>
  );
};

export default WeatherCard;
