/*jshint esversion:9*/

import React from 'react';
import {SpinnerOverlay,SpinnerContainer} from './with-spinner-style';

const WithSpinner = WrappedComponents => ({isLoading,...otherProps}) => {
  return  isLoading?(

      <SpinnerOverlay>
        <SpinnerContainer/>
      </SpinnerOverlay>)
      :
      (
      <WrappedComponents {...otherProps}/>
  )
}

export default WithSpinner;
