import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// 

import Navbar from './Component/layout/Navbar';
import Footer from './Component/layout/Footer';
// import react router 
import { Switch, Route } from 'react-router-dom';

import Home from './Component/pages/Home';
import News from './Component/pages/News';
import Contact from './Component/pages/Contact';
import Details from './Component/pages/Details';
import NotFoundPage from './Component/pages/NotFoundPage';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
       <Switch>
        <Route exact path = "/" component = {Home} />
        <Route path = "/news" component = {News} />
        <Route path = "/contact" component = {Contact} />
        <Route path = "/details" component = {Details} />
        <Route component = {NotFoundPage} />
       </Switch>
      <Footer />
      </div>
    )
  }
}

export default App

