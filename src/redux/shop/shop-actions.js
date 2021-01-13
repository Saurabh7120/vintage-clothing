/*jshint esversion:9*/

import {ShopActionTypes} from './shop-types';
import {firestore,convertCollectionSnapshotsToMap} from '../../firebase/firebase.utils';

export const updateCollection = collection => ({
  type:ShopActionTypes.UPDATE_COLLECTION,
  payload:collection
});


export const fetchCollectionStart = () => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionSuccess = collection => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload:collection
});

export const fetchCollectionFailure = message => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:message
});

export const fetchCollectionStartAsync = ()=>{
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionStart());
    collectionRef.get().then(snapshot=>
    {
      let transformedCollection = convertCollectionSnapshotsToMap(snapshot);
      dispatch(fetchCollectionSuccess(transformedCollection));
    }
    )
    .catch(err => dispatch(fetchCollectionFailure(err.message)));
  };
};
