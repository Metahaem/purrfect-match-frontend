import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import { render } from 'react-snapshot';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-react'
import { renderToString } from 'react-dom/server';
import { HeadProvider } from 'react-head';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

serviceWorker.unregister();
