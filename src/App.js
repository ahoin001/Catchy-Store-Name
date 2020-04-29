import React from 'react';
import HomePage from "./pages/homepage/HomePage";
import './App.css'

import { Switch, Route } from "react-router-dom";
import X from './pages/detail/x';

const App = () => {
  return (

    <div className="App">



      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/about/:aParam">
          <X />
        </Route>
      </Switch>

    </div>


  );
};

export default App;