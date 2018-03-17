import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CustomerCreate from './components/CustomerCreate'
import Stores from './components/Stores'
import Products from './components/Products'
import Cart from './components/Cart'
import Store from './components/Store'
import Checkout from './components/Checkout'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            <nav>
            <div className="row">
                <ul className="main-nav js--main-nav">
                    <li><Link to="/">Home</Link></li>
                </ul>
                <ul className="main-nav js--main-nav">
                    <li><Link to="/Stores">Stores</Link></li>
                </ul>
                <ul className="main-nav js--main-nav">
                    <Cart />
                </ul>
            </div>
            </nav>
        </header> 
        <Switch>     
          <Route exact path="/" component={ Home } />
          <Route exact path="/CustomerCreate" component={ CustomerCreate } />
          <Route exact path="/Stores" component={ Stores } />
          <Route exact path="/Products" component={ Products } />
          <Route path="/Stores/:id/:name" component={ Store }/>
          <Route exact path="/Checkout" component={ Checkout }/>
        </Switch>  
      </div>
    );
  }
}


export default App
