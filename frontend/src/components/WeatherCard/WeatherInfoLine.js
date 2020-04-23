import React from 'react';
import * as S from './styles';

const WeatherInfoLine = ({ title, data, type }) => (
  <S.LineContainer>
    {title ? <p>{title}</p> : null }
    <p>{Math.floor(data)} {type || 'ºC'}</p>
  </S.LineContainer>
);

export default WeatherInfoLine;
