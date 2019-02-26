import React, { Component } from 'react';
import '../App.css';
import {Route, Switch } from 'react-router-dom'
import Adopter from './Adopter.js'
import Navbar from './Navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav"/>
        <Route path="/welcome" component={props=><h1>Welcome to Purrfect Match!</h1>}/>
        <Route path="/adopter" component={props=><Adopter/>}
      />

      </div>
    )
  }
}

export default App;
