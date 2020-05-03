import React, { useState, useEffect } from 'react';
import * as S from './styles';

const ErrorMessage = (props) => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => { // memory leak problem
    setTimeout(() => setToggle(true), 5000);
  }, []);

  let errorMessageC = <S.ErrorMessage>{props.children}</S.ErrorMessage>;
  if (toggle) {
    errorMessageC = null;
  }

  return errorMessageC;
};

export default ErrorMessage;
