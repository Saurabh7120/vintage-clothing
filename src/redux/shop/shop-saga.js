/*jshint esversion:9*/

import {takeLatest,call,put} from 'redux-saga/effects';
import {firestore,convertCollectionSnapshotsToMap} from '../../firebase/firebase.utils';
import {fetchCollectionFailure,fetchCollectionSuccess} from './shop-actions';
import {ShopActionTypes} from './shop-types';

export function* fetchCollectionAsync(){
  //yield alert('i m fired');
  try {
    const collectionRef = firestore.collection('collections');
    const snapshot = yield collectionRef.get();
    const transformedCollection = yield call(convertCollectionSnapshotsToMap,snapshot);
    yield put(fetchCollectionSuccess(transformedCollection));
  } catch (e) {
    yield put(fetchCollectionFailure(e.message));
  }

}

export function* fetchCollectionStart(){
  yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,
  fetchCollectionAsync);
}
