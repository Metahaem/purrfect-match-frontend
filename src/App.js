import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/welcome" component={props=><h1>Welcome to Purrfect Match!</h1>}
      
      </div>
    );
  }
}

export default App;
