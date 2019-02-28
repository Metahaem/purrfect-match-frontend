import React, { Component } from 'react';
import '../App.css';
import {Route, Switch, Redirect } from 'react-router-dom'
import Adopter from './Adopter.js'
import Navbar from './Navbar.js'
import Welcome from './Welcome.js'
import LoginPage from './LoginPage.js'
import { createBrowserHistory } from "history";
import API from '../API'


const history = createBrowserHistory();

class App extends Component {
  state = {
    username: ''
  }

  login = user => {
    localStorage.setItem('token', user.token)
    // localStorage.setItem('username', user.username)
    this.setState({ username: user.username });

  }

  logout = () => {
    localStorage.removeItem('token')
    // localStorage.removeItem('username')
    this.setState({ username: '' })
  }

// componentDidMount () {
//   API.validate()
//   .then(data => {
//     if (data.error) {
//       this.logout()
//     } else {
//       this.login(data.username)
//       history.push("/adopter")
//     }
//   }) 
// }
// WHY ARE WE VALIDATING ON MOUNT

  render() {
    const {login} = this
    return (
      <div className="App">
      <button onClick={this.logout}>Logout</button>
      
      {/* <Navbar className="navbar navbar-expand-lg bg-secondary fixed-top text-uppercase" id="mainNav"/> */}
      <Switch>
        <Route path='/login' component={routerProps => <LoginPage login={login} {...routerProps} />} />
        <Route path="/welcome" component={ () => <Welcome />}/>
        <Route path="/adopter" component={routerProps => <Adopter login={login} username={this.state.username} {...routerProps}/>}/>
        {/* <Route path="/home" component={props=><Home/>} */}
        <Route component={() => <h1>Page not found.</h1>} />
      </Switch>
      </div>
    )
  }
}

export default App;
