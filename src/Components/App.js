import React, { Component } from 'react';
import '../App.css';
import {Route, Switch } from 'react-router-dom'
import Adopter from './Adopter.js'
import Navbar from './Navbar.js'
import Welcome from './Welcome.js'
import ClippedDrawer from './ClippedDrawer.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Navbar className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav"/>
      <ClippedDrawer />
        <Route path="/welcome" component={ () => <Welcome />}/>
        <Route path="/adopter" component={props=><Adopter/>}/>
        {/* <Route path="/home" component={props=><Home/>} */}

      

      </div>
    )
  }
}

export default App;
