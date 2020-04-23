import React from 'react';
import WeatherInfoLine from './WeatherInfoLine';
import * as S from './styles';

const WeatherInfo = ({ data }) => (
  <S.InfoContainer>
    <WeatherInfoLine data={data.temp} />
    <WeatherInfoLine title="Sensação térmica" data={data.feels_like} />
    <WeatherInfoLine title="Mínima" data={data.temp_min} />
    <WeatherInfoLine title="Máxima" data={data.temp_max} />
    <WeatherInfoLine title="Umidade" data={data.humidity} />
    <WeatherInfoLine title="Pressão" data={data.pressure} />
  </S.InfoContainer>
);

export default WeatherInfo;
