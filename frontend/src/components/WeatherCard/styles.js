import styled from 'styled-components';

export const WeatherContainer = styled.div`
  margin: 12px auto;
  padding: 2px;
  width: 30%;
  max-width: 550px;
  box-sizing: border-box;
  text-align: center;
  
  color: white;
  border: 1px solid black;
  border-radius: 12px;

  background: rgba(0, 0, 0, 0.8);
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0 0 12px 12px;

  color: black;
  background: white;
`;

export const LineContainer = styled.div`
  margin: 0 12px;
`;
