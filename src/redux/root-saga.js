/*jshint esversion:9*/

import {call,all} from 'redux-saga/effects';
import {fetchCollectionStart} from './shop/shop-saga';
import {userSagas} from './user/user-sagas';
import {cartSagas} from './cart/cart-sagas';

export default function* rootSaga(){
  yield all([call(fetchCollectionStart),call(userSagas),call(cartSagas)]);
}
