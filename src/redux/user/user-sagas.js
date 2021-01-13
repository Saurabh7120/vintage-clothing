/*jshint esversion:9*/
/*jshint -W087*/

import {takeLatest,put,all,call} from 'redux-saga/effects';

import UserActionTypes from './user-types';

import {auth,googleProvider,createUserProfileDocument,getCurrentUser} from '../../firebase/firebase.utils';

import {SignInSuccess,SignInFailure,signOutSuccess,signOutFailure,signUpFailure,signUpSuccess} from './user-actions'

export function* getSnapshotFromUserAuth(userAuth){
  try{
    const userRef = yield call(createUserProfileDocument,userAuth);
    const userSnapshot = yield userRef.get();
    yield put(SignInSuccess({id:userSnapshot.id,...userSnapshot.data()}));
  }catch(err){

  }
}

export function* signInWithGoogle(){
    debugger;
      yield console.log('hit');
  try {
    const {user} = yield auth.signInWithPopup(googleProvider);
    yield getSnapshotFromUserAuth(user);

  } catch (e) {
      yield put(SignInFailure(e));
  }
}

export function* onGoogleSignInStart(){
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

export function* signInWithEmail({payload:{email,password}}){
  try{
    const {user} = yield auth.signInWithEmailAndPassword(email,password);
    yield getSnapshotFromUserAuth(user);
  }catch(err){
    yield console.log(err);
    yield put(SignInFailure(err));
  }
}

export function* onEmailSignInStart(){
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

export function* isUserAuthenticated(){
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (error) {
    yield put(SignInFailure(error))
  }
}

export function* onCheckUserSession(){
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated)
}

export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess());    
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onStartSignOut(){
  yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut)
}

export function* signUp({payload:{displayName, email, password}}){
  try {
    yield console.log(user);
    const {user} =  yield auth.createUserWithEmailAndPassword(email,password)
    yield put(signUpSuccess({email,password}))
  } catch (error) {
    yield put(signUpFailure(error))
  }
}

export function* onSignUpStart(){
  yield takeLatest(UserActionTypes.SIGN_UP_START,signUp);
}

export function* onSignUpSuccess(){
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,signInWithEmail)
}

export function* userSagas(){
  debugger;
  yield console.log('hit');
  yield all([call(onGoogleSignInStart),call(onEmailSignInStart),call(onCheckUserSession),call(onStartSignOut),call(onSignUpSuccess),call(onSignUpStart)]);
}
