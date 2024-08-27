import { SpinnerContainer, SpinnerOverlay } from './spinner.styles.tsx';
import React from 'react';

const Spinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
