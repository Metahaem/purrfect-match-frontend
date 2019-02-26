import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

ReactDOM.render(  
  <Router>
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
