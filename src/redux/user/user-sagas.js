import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'

import { auth, googleProvider, createUserProfileDocument } from '../../components/config/firebase/firebase-util'

import {
    signInSuccess,
    signInFailure
} from './user-actions'

export function* signInWithGoogle() {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(`###### `, user)

        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        console.log(`Snapshot :`, userSnapShot)
        const l = { ...userSnapShot.data() }
        console.log(l)
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

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail({ payload: { email, password } }) {

    try {

        // ? Extract user auth object from auth sign in 
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        const userRef = yield call(createUserProfileDocument, user);
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

export function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

// ? Export Sagas to root rootSaga
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart)
    ])

}