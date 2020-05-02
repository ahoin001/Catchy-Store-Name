import React, { useState, useEffect } from 'react';
import HomePage from "./pages/homepage/HomePage";
import Shop from './pages/shop/Shop';
import UserAuth from './pages/user-handling/User-Auth';
import Header from './components/navigation/Header';

import { Switch, Route } from "react-router-dom";
import { auth } from './components/config/firebase/firebase-util'
import './App.css'

const App = () => {

  const [currentUser, setCurrentUser] = useState()

  useEffect(() => {

    let unsubscribeFromAuth;

    // ? This open subscription stays open as long as this component is mounted
    const getUser = async () => {

      // https://firebase.google.com/docs/auth/web/manage-users?authuser=0
      // ? onAuthStateChanged will set observer to keep track of user state activity (Listens to any user sign in changes across our firebase project and will update if our user is signed in or signed out)
      // ? It also returns an unsubscribe function that I will use when component unmounts

      unsubscribeFromAuth = await auth.onAuthStateChanged((user) => {

        setCurrentUser(user)
        console.log(user)
      })
    }

    getUser();

    // ? unsub when component unmounts
    return () => {
      unsubscribeFromAuth();
    }

  }, [])


  return (

    <div className="App">

      {/* Place Header here so it persists above all components rendered by switch */}
      <Header currentUser={currentUser} />

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/signin">
          <UserAuth />
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