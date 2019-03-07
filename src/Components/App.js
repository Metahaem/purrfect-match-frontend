import React, { Component } from 'react';
import '../App.css';
import {Route, Switch, Redirect } from 'react-router-dom'
import Adopter from './Adopter.js'
import LoginPage from './LoginPage.js'
import HomeOrAdopt from './HomeOrAdopt'
import { createBrowserHistory } from "history";
import { createMuiTheme } from '@material-ui/core/styles';
import Navbar from './Navbar'
import '../vendor/fontawesome-free/css/all.min.css'
import 'typeface-roboto';


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
    username: '',
    filters: null,
    adopterOrHome: null
  }
 

  login = user => {
    localStorage.setItem('token', user.token)
    this.setState({ username: user.username });

  }

  logout = () => {
    localStorage.removeItem('token')
    this.setState({ username: '' })
  }

    // ----------------------Filters
    
  setFilters = (object) => this.setState({filters: object})

  changeAppState = (selectedFilters) => {
    console.log(selectedFilters)
    this.setState({filters: selectedFilters})
  }

  // ---------------------Render

  render() {
    const {login} = this
    return (
      <div className='bg text-white mb-0'>
        <Navbar 
          filters={this.state.filters} 
          setFilters={this.state.setFilters}
          changeAppState={this.changeAppState}
          logout={this.logout}
        />
        
        <Switch>

          <Route path='/login' component={routerProps => <LoginPage login={login} {...routerProps} />} />

          <Route path="/adopter" component={routerProps => 
            <Adopter 
              className='bg'
              login={login} 
              username={this.state.username} 
              filters={this.state.filters} 
              {...routerProps}/>}/>

          <Route path="/homeoradopt" component={routerProps => <HomeOrAdopt {...routerProps}/>}/>
          {/* <Route path={`pets/${pet.id}`} component={routerProps => <PetInfo pet={pet} {...routerProps} />} /> */}
          {/* <Route path="/home" component={props=><Home/>} */}

          <Route component={() => <h1>Page not found.</h1>} />

        </Switch>
        
      </div>
    )
  }
}

export default App;
