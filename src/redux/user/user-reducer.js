/*jshint esversion:9*/
import UserActionTypes from './user-types';

const Initial_State = {
  currentUser: null,
  error:null
};

const userReducer = (state=Initial_State, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
    return {
      ...state,
      currentUser: action.payload
    };

    case UserActionTypes.SIGN_IN_SUCCESS:
    return {
      ...state,
      currentUser:action.payload,
      error:null
    };

    case UserActionTypes.SIGN_OUT_SUCCESS:
    return{
      ...state,
      currentUser:null,
      error:null
    }

    case UserActionTypes.SIGN_UP_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_IN_FAILURE:
    return {
      ...state,
      error:action.payload
    };

    default:
      return state;
  }

};


export default userReducer;
