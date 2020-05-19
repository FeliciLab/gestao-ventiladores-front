import React from 'react';
import { Router } from 'react-router';
import ReactDOM from 'react-dom';

import App from './App';
import { createBrowserHistory } from 'history';


const history = createBrowserHistory();
ReactDOM.render(<Router history={history}>
    <App/>
  </Router>
  , document.getElementById('root'));