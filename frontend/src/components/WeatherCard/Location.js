import React from 'react';

const Location = ({ data }) => {
  const { city, state } = data;
  return (
    <h1>
      {city}
      ,
      {' '}
      {state}
    </h1>
  );
};

export default Location;
