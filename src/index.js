import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ? Redux provider so whole app has access to store and reducers
import { Provider } from 'react-redux'

import { BrowserRouter as Router, } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>

    <Provider>

      <Router>

        <App />

      </Router>

    </Provider>


  </React.StrictMode>,
  document.getElementById('root')
);
