import React, { Component } from 'react';
import './App.css';
import {Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/welcome" component={props=><h1>Welcome to Purrfect Match!</h1>}/>
        <Route path="/animals" component={props=>
        <h1>Pet</h1>
        }
      />

      </div>
    )
  }
}

export default App;
