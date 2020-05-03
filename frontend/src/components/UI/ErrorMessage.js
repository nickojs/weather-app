import React from 'react';
import * as S from './styles';

const ErrorMessage = ({ error }) => {
  let errorMessageC = null;

  if (error) {
    const message = error.error;
    errorMessageC = <S.ErrorMessage>{message}</S.ErrorMessage>;
  }

  return errorMessageC;
};

export default ErrorMessage;
