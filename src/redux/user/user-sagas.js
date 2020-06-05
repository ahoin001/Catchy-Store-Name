import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'

import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../components/config/firebase/firebase-util'

import {
    signInSuccess,
    signInFailure,
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
        yield getSnapshotFromUserAuthAndDispatchSignInSuccess(userAuth)


    } catch (error) {
        yield put(signInFailure(error))
    }

}


export function* signInWithEmail({ payload: { email, password } }) {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuthAndDispatchSignInSuccess(user)


    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithGoogle() {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(`###### `, user)

        yield getSnapshotFromUserAuthAndDispatchSignInSuccess(user)

    } catch (error) {
        yield put(signInFailure(error))
    }

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
//  Export Sagas
// ***************************************************************

// ? Export Sagas to root rootSaga
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart)
    ])

}

// ***************************************************************
//  Helpers
// ***************************************************************
export function* getSnapshotFromUserAuthAndDispatchSignInSuccess(userAuth) {

    try {

        const userRef = yield call(createUserProfileDocument, userAuth);
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
