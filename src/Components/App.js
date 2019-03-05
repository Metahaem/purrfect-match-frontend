import React, { Component } from 'react';
import '../App.css';
import {Route, Switch, Redirect } from 'react-router-dom'
import Adopter from './Adopter.js'
import LoginPage from './LoginPage.js'
import HomeOrAdopt from './HomeOrAdopt'
import { createBrowserHistory } from "history";
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from './Navbar'


const history = createBrowserHistory();

const theme = createMuiTheme({
  palette: {
    primary: {  
      main: '#18BC9C',
    },
    secondary: {
      main: '#f44336',
    },
  },
});

class App extends Component {
  state = {
    username: ''
  }

  login = user => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username });

  }

  logout = () => {
    localStorage.removeItem('token')
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
      <div className="App body">
      <Navbar />
      <Switch>
        <Route path='/login' component={routerProps => <LoginPage login={login} {...routerProps} />} />
        {/* <Route path="/welcome" component={ routerProps => <Welcome login={login} {...routerProps}/>}/> */}
        <Route path="/adopter" component={routerProps => <Adopter login={login} username={this.state.username} {...routerProps}/>}/>
        <Route path="/homeoradopt" component={routerProps => <HomeOrAdopt {...routerProps}/>}/>
        {/* <Route path="/home" component={props=><Home/>} */}
        <Route component={() => <h1>Page not found.</h1>} />
      </Switch>
      <button onClick={this.logout}>Logout</button>
      </div>
    )
  }
}

export default App;
