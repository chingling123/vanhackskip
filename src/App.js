import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './components/Home'
import CustomerCreate from './components/CustomerCreate'
import Stores from './components/Stores'
import Products from './components/Products'
import Cart from './components/Cart'
import Store from './components/Store'
import Checkout from './components/Checkout'
import Orders from './components/Orders'

import './App.css'

class App extends Component {
  render() {
    const token = sessionStorage.getItem('token')
    return (
      <div className="App">
      {console.log("token: ", token)}
        <header>
            <nav>
            <div className="row">
                <ul className="main-nav js--main-nav">
                    <li>{token === null ? <Link to="/">Login</Link> : <Link to="/Logout">LogOut</Link>}</li>
                </ul>
                {token !== null ? <div>
                  <ul className="main-nav js--main-nav">
                      <li><Link to="/Stores">Stores</Link></li>
                  </ul>
                  <ul className="main-nav js--main-nav">
                      <li><Link to="/Orders">Orders</Link></li>
                  </ul>
                  <ul className="main-nav js--main-nav">
                      <Cart />
                  </ul>
                  </div> : <div></div>
                }
            </div>
            </nav>
        </header> 
        <Switch>     
          <Route exact path="/" render={(props) => (
            <Home {...props} signout={false}/>
          )} />
          <Route exact path="/Logout" render={(props) => (
            <Home {...props} signout={true}/>
          )} />
          <Route exact path="/CustomerCreate" component={ CustomerCreate } />
          <Route exact path="/Stores" render={(props) => (
            token !== null
              ? <Stores {...props} />
              : <Redirect to='/' />
          )} />
          <Route exact path="/Products" render={(props) => (
            token !== null
              ? <Products {...props} />
              : <Redirect to='/' />
          )} />
          <Route path="/Stores/:id/:name" render={(props) => (
            token !== null
              ? <Store {...props} />
              : <Redirect to='/' />
          )} />
          <Route exact path="/Checkout" render={(props) => (
            token !== null
              ? <Checkout {...props} />
              : <Redirect to='/' />
          )} />
          <Route exact path="/Orders" render={(props) => (
            token !== null
              ? <Orders {...props} />
              : <Redirect to='/' />
          )} />
        </Switch>  
      </div>
    );
  }
}


export default App
