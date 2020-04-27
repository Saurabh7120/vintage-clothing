/*jshint esversion:6*/
import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import Header from './components/header/header-component';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;
