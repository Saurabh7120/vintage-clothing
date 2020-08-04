/*jshint esversion:9*/
import Data from  './shop-data';

const INITIAL_STATE={
  collection:Data
};

const shopReducer = (state=INITIAL_STATE,action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default shopReducer;
