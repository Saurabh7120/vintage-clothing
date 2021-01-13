/*jshint esversion:9*/
import Data from  './shop-data';
import {ShopActionTypes} from './shop-types';

const INITIAL_STATE={
  collection:null,
  isFetching:false,
  error:''
};

const shopReducer = (state=INITIAL_STATE,action) => {
  switch (action.type) {

    case ShopActionTypes.FETCH_COLLECTIONS_START:
    return{
      ...state,
      isFetching:true
    };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
    return{
      ...state,
      isFetching:false,
      collection:action.payload
    };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
        ...state,
        isFetching:false,
        error:action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
