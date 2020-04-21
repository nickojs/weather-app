import React from 'react';

const Description = ({ data }) => {
  const { description, icon } = data;

  return (
    <div>
      <h1>
        image(icon):
        {icon}
      </h1>
      <h1>
        description:
        {description}
      </h1>
    </div>
  );
};

export default Description;
