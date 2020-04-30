import React from 'react';
import HomePage from "./pages/homepage/HomePage";
import Shop from './pages/shop/Shop';

import { Switch, Route } from "react-router-dom";
import './App.css'

const App = () => {
  return (

    <div className="App">

      <Switch>
        
        {/* Both ways of writing work */}
        
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>

      </Switch>

    </div>

  );
};

export default App;