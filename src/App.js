/*jshint esversion:6*/
import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage-component';
import ShopPage from './pages/shop/shop-component';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/shop' component={ShopPage}/>
    </Switch>
  );
}

export default App;
