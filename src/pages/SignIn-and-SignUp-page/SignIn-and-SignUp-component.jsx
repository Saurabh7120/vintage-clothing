/*jshint esversion:9*/
import React from 'react';
import './SignIn-and-SignUp-styles.scss';
import SignIn from '../../components/SignIn/SignIn-component';
import SignUp from '../../components/SignUp/SignUp-component';

const SignInAndSignUpPage = () => (
  <div className='sign-in-and-sign-up'>
    <SignIn/>
    <SignUp/>
  </div>
)

export default SignInAndSignUpPage;
