/*jshint esversion:9*/

import React from 'react';
import FormInput from '../form-input/form-input-component';
import CustomButton from '../custom-button/custom-button-component';
import './SignIn-styles.scss';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {googleSignInStart,emailSignInStart} from '../../redux/user/user-actions';

class SignIn extends React.Component{
  constructor(){
    super();

    this.state={
      email:'',
      password:''
    };
  }

  handleSubmit=async event =>{
    event.preventDefault();
    const {email, password} = this.state;
    const {EmailSignInStart} = this.props;

    EmailSignInStart(email,password);
  }

  handleChange = event=>{
    const {name,value} = event.target;
    this.setState({
      [name]:value
    })
  }

  render(){
    const {GoogleSignInStart} = this.props;
    return(
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' label='Email' value={this.state.email} handleChange={this.handleChange} required/>
          <FormInput name='password' type='password' label='Password' value={this.state.password} handleChange={this.handleChange} required/>
          <div className='buttons'>
          <CustomButton children='SIGN IN' type='submit' value='Submit Form'/>
          <CustomButton type='button' children='SIGN IN WITH GOOGLE' onClick={GoogleSignInStart} isGoogleSignIn/>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  GoogleSignInStart: () => dispatch(googleSignInStart()),
  EmailSignInStart: (email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null,mapDispatchToProps)(SignIn);
