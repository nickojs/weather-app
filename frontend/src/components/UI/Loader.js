import React from 'react';
import ScaleLoader from 'react-spinners/ScaleLoader';
import { css } from '@emotion/core';

const Loader = ({ status }) => (
  <ScaleLoader
    loading={status}
    css={css`
      margin: 0 auto;
      background: red;`}
  />

);

export default Loader;
