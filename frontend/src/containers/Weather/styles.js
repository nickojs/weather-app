import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

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
