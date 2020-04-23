import React from 'react';
import * as S from './styles';

const WeatherInfoLine = ({ title, data }) => (
  <S.LineContainer>
    {title ? <p>{title}</p> : null }
    <p>{Math.floor(data)}</p>
  </S.LineContainer>
);

export default WeatherInfoLine;
