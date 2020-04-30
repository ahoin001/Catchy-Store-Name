import React from 'react';
import HomePage from "./pages/homepage/HomePage";
import Shop from './pages/shop/Shop';

import { Switch, Route } from "react-router-dom";
import './App.css'
import Header from './components/navigation/Header';
import UserAuth from './pages/user-handling/User-Auth';

const App = () => {
  return (

    <div className="App">

      {/* Place Header here so it persists above all components rendered by switch */}
      <Header />

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/signin">
         <UserAuth/>
        </Route>

        <Route path="/shop">
          <Shop />
        </Route>

      </Switch>
      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>

  );
};

export default App;