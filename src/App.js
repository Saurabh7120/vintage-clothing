/*jshint esversion:6*/
import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import SignInAndSignUpPage from './pages/SignIn-and-SignUp-page/SignIn-and-SignUp-component';
import {Route,Switch, Redirect} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-actions';

class App extends React.Component{


  unsubscribeFromAuth = null;

  componentDidMount(){
    const{setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot =>{

            setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            })
        });
      }

        setCurrentUser(userAuth);

    });
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
      <Route exact path='/shop' component={ShopPage}/>
      <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignInAndSignUpPage/>)}/>
    </Switch>
    </div>
  );}
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
