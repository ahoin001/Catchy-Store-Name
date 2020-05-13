import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import { connect, useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import lodash from 'lodash'

import { setCurrentUser } from "./redux/user/user-actions";
import { selectUserStatus } from './redux/user/selectors/user-selectors'

import HomePage from "./pages/homepage/HomePage";
import Shop from './pages/shop/Shop';
import UserAuth from './pages/user-handling/User-Auth';
import Checkout from './pages/checkout/checkout'

import Header from './components/navigation/Header';
import { auth, createUserProfileDocument } from './components/config/firebase/firebase-util'


import './App.css'

const App = () => {

  // const currentUser = useSelector((state) => {
  //   return state.user.currentUser
  // }, shallowEqual)

  const structuredSelector = createStructuredSelector({
    currentUser: (state) => selectUserStatus(state)
  })

  const { currentUser } = useSelector(structuredSelector, lodash.isEqual)

  const dispatch = useDispatch()

  useEffect(() => {

    let unsubscribeFromAuth = null;

    const getUser = async () => {

      // https://firebase.google.com/docs/auth/web/manage-users?authuser=0
      // ? This open subscription stays open as long as this component is mounted
      // ? onAuthStateChanged will set observer to keep track of user state activity (Listens to any user sign in changes across our firebase project and will update if our user is signed in or signed out)
      // ? It also returns an unsubscribe function that I will use when component unmounts

      // userAuth argument is given by onauth user state
      unsubscribeFromAuth = await auth.onAuthStateChanged(async (userAuth) => {

        if (userAuth) {

          const userRef = await createUserProfileDocument(userAuth)

          // ? set listener for any changes of data at that ref, and also get the original state of it to set data
          userRef.onSnapshot((snapShot) => {

            dispatch(setCurrentUser({

              id: snapShot.id,
              ...snapShot.data()

            }))

          })

        } else {
          // console.log(userAuth)
          // ? set current user to null (onAuth will return null if user signs out )
          dispatch(setCurrentUser((userAuth)))
          // props.setCurrentUser(userAuth)
        }

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
      <Header />

      <Switch>

        <Route exact path="/">
          <HomePage />
        </Route>

        <Route
          exact path="/signin"
          render={() => currentUser ?
            <Redirect to='/' /> :
            <UserAuth />}
        >
        </Route>

        <Route path="/shop">
          <Shop />
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


// ? dispatch function provided by connect
// const mapDispatchToProps = (dispatch) => {

//   return {

//     // ? Dispatch excecutes action creator function with user argument and returns the action object for dispatch excecution
//     setCurrentUser: user => dispatch(setCurrentUser(user))

//   }

// }

// Get userReducerState from state with destructure
// const mapStateToProps = ({ user }) => {

//   return { currentUser: user.currentUser }

// }


export default connect()(App);