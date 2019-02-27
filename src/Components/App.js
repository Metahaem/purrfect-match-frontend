import React, { Component } from 'react';
import '../App.css';
import {Route, Switch } from 'react-router-dom'
import Adopter from './Adopter.js'
import Navbar from './Navbar.js'
import Welcome from './Welcome.js'
import LoginPage from './LoginPage.js'



class App extends Component {
  state = {
    username: ''
  }

  login = username => {
    console.log("hahaha")
    localStorage.setItem('username', username)
    this.setState({ username: username })
  }

  logout = username => {
    localStorage.removeItem('username')
    this.setState({ username: '' })
  }

  render() {
    return (
      <div className="App">
      
      
      {/* <Navbar className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav"/> */}
      <Switch>
        {/* <Route path='/login' component={routerProps => <LoginPage login={this.login} {...routerProps} />} /> */}
        <Route path="/welcome" component={ () => <Welcome />}/>
        <Route path="/adopter" component={props=><Adopter/>}/>
        {/* <Route path="/home" component={props=><Home/>} */}
        <Route component={() => <h1>Page not found.</h1>} />
      </Switch>
      </div>
    )
  }
}

export default App;
