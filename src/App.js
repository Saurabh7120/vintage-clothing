/*jshint esversion:6*/
import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/SignIn-and-SignUp-page/SignIn-and-SignUp-component';
import CheckoutPage from './pages/checkout/checkout-component';
import {Route,Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {checkUserSession} from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';

class App extends React.Component{


  unsubscribeFromAuth = null;

  componentDidMount(){
    const {checkUserSession} = this.props;
    checkUserSession();
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/shop' component={ShopPage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
    </Switch>
    </div>
  );}
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
