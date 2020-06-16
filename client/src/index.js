import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, } from "react-router-dom";
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

// ? Redux Provider passes access to store and reducers to rest of application
import { store, persistor } from './redux/store'


import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>

    {/* Allows react-redux hooks to access store and dispatch actions */}
    <Provider store={store}>

      <Router>

        {/*  */}
        <PersistGate persistor={persistor}>

          <App />

        </PersistGate>

      </Router>

    </Provider>


  </React.StrictMode>
  ,
  document.getElementById('root')
);
