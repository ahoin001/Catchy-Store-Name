import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ? Redux Provider passes access to store and reducers to rest of application
import { Provider } from 'react-redux'
import store from './redux/store'

import { BrowserRouter as Router, } from "react-router-dom";

ReactDOM.render(
  // <React.StrictMode>

    <Provider store={store}>

      <Router>

        <App aProp="prop"/>

      </Router>

    </Provider>


  // </React.StrictMode>
  ,
  document.getElementById('root')
);
