import { takeLatest, put, all, call } from 'redux-saga/effects'
// put is to dispatch an action back to redux flow , where another saga can catch it again

import UserActionTypes from './user-types'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../components/config/firebase/firebase-util'

import {
    signInSuccess,
    signInFailure,
    signUpSuccess,
    signUpFailure,
    signOutSuccess,
    signOutFailure
} from './user-actions'

// ***************************************************************
//  Watcher Sagas
// ***************************************************************

export function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

// ***************************************************************
//  Worker Sagas
// ***************************************************************

export function* isUserAuthenticated() {

    try {

        const userAuth = yield getCurrentUser()
        if (!userAuth) return;
        yield getSnapshotFromUserAuthAndDispatchSignIn(userAuth)


    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithEmail({ payload: { email, password } }) {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuthAndDispatchSignIn(user)


    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithGoogle() {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(`###### `, user)

        yield getSnapshotFromUserAuthAndDispatchSignIn(user)

    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signUp({ payload: { name, email, password } }) {

    try {

        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        console.log(user)
        // ? additional data has object value because its data is spread later in excecution
        yield put(signUpSuccess({ user, additionalData: { name } }))

    } catch (error) {
        yield put(signUpFailure(error))
    }

}

export function* signInAfterSignUp({ payload: { user, additionalData } }) {

    // ! problem here
    console.log(user)
    yield getSnapshotFromUserAuthAndDispatchSignIn(user, additionalData)

}

export function* signOut() {

    try {

        // ? Extract user auth object from auth sign in 
        yield auth.signOut()
        yield put(signOutSuccess())

    } catch (error) {
        yield put(signOutFailure(error))
    }

}

// ***************************************************************
//  Helpers
// ***************************************************************
export function* getSnapshotFromUserAuthAndDispatchSignIn(userAuth, additionalData) {

    try {

        console.log('++++++++++', userAuth)
        const userRef = yield call(
            createUserProfileDocument,
            userAuth,
            additionalData);

        const userSnapShot = yield userRef.get();

        // ? Use user Data to create action with user Object as payload
        // ? put sends return object back to redux flow
        yield put(signInSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))

    } catch (error) {
        yield put(signInFailure(error))
    }

}

// ***************************************************************
//  Export Sagas
// ***************************************************************

// ? Export Sagas to root rootSaga
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])

}


