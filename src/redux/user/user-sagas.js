import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'

import { auth, googleProvider, createUserProfileDocument } from '../../components/config/firebase/firebase-util'

import {
    signInSuccess,
    signInFailure
} from './user-actions'

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithGoogle() {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(`###### `, user)

        yield getSnapshotFromUserAuth(user)

    } catch (error) {
        yield put(signInFailure(error))
    }

}

export function* signInWithEmail({ payload: { email, password } }) {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user)


    } catch (error) {
        yield put(signInFailure(error))
    }

}

// ? Export Sagas to root rootSaga
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])

}

export function* getSnapshotFromUserAuth(userAuth) {

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
