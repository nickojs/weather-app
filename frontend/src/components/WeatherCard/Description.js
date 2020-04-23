import React from 'react';

const Description = ({ data }) => {
  const { description, icon } = data;

  return (
    <div>
      <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt={description} />
      <h1>
        {description}
      </h1>
    </div>
  );
};

export default Description;
