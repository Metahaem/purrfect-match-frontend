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
    filtersVisible: false,
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
    
  toggleFilterMenu = () => {
    const newState = !this.state.filtersVisible
    this.setState({filtersVisible: newState})
  }

  setFilters = (object) => this.setState({filters: object})

  render() {
    const {login} = this
    return (
      <div className='bg text-white mb-0'>
        <Navbar 
          filtersVisible={this.state.filterMenu} 
          filters={this.state.filters} 
          toggleFilterMenu={this.toggleFilterMenu} 
          setFilters={this.state.setFilters}
        />

        <Switch>

          <Route path='/login' component={routerProps => <LoginPage login={login} {...routerProps} />} />

          <Route path="/adopter" component={routerProps => 
            <Adopter 
              login={login} 
              username={this.state.username} 
              filters={this.state.filters} 
              {...routerProps}/>}/>

          <Route path="/homeoradopt" component={routerProps => <HomeOrAdopt {...routerProps}/>}/>
          {/* <Route path={`pets/${pet.id}`} component={routerProps => <PetInfo pet={pet} {...routerProps} />} /> */}
          {/* <Route path="/home" component={props=><Home/>} */}

          <Route component={() => <h1>Page not found.</h1>} />

        </Switch>

        <button onClick={this.logout}>Logout</button>

      </div>
    )
  }
}

export default App;
