import React from 'react';
import mockData from '../../mock.json';
import Location from './Location';
import Description from './Description';
import WeatherInfo from './WeatherInfo';
import * as S from './styles';

const WeatherCard = (props) => {
  const { main, location, weather } = mockData.data;
  console.log(main, location, weather);

  return (
    <S.WeatherContainer>
      <Location data={location} />
      <Description data={weather} />
      <WeatherInfo data={main} />
    </S.WeatherContainer>
  );
};

export default WeatherCard;
