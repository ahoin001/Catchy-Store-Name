import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import lodash from 'lodash'

import { selectUserStatus } from './redux/user/selectors/user-selectors'
import { checkUserSession } from './redux/user/user-actions'

import HomePage from "./pages/homepage/HomePage";
import Shop from './pages/shop/Shop';
import UserAuth from './pages/user-handling/User-Auth';
import Checkout from './pages/checkout/checkout'

import Header from './components/navigation/Header';

import { GlobalStyle } from './globalstyles'

// import './App.css'

const App = () => {

  const structuredSelector = createStructuredSelector({
    currentUser: (state) => selectUserStatus(state)
  })

  const { currentUser } = useSelector(structuredSelector, lodash.isEqual)

  const dispatch = useDispatch()
  const checkUserStatus = React.useCallback(
    () => dispatch(checkUserSession()),
    [dispatch]
  )

  useEffect(() => {

    checkUserStatus()

  }, [checkUserStatus])

  return (

    <div >

    <GlobalStyle/>

      {/* Place Header here so it persists above all components rendered by switch */}
      <Header />

      <Switch>

        <Route
          exact path="/"
          component={HomePage}
        >

        </Route>

        <Route
          exact path="/signin"
          render={() => currentUser ?
            <Redirect to='/' /> :
            <UserAuth />}
        >
        </Route>

        <Route
          path="/shop"
          component={Shop}
        >

        </Route>

        <Route
          exact path="/checkout"
          component={Checkout}
        >

        </Route>

      </Switch>

      <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

    </div>

  );

};

export default connect()(App);