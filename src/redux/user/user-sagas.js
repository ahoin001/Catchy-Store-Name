import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'

import { auth, googleProvider, createUserProfileDocument } from '../../components/config/firebase/firebase-util'

import {
    googleSignInSuccess,
    googleSignInFailure
} from './user-actions'

export function* signInWithGoogle() {

    try {

        // ? Extract user object from auth object 
        const { user } = yield auth.signInWithPopup(googleProvider);
        console.log(`###### `, user)

        const userRef = yield call(createUserProfileDocument, user);
        const userSnapShot = yield userRef.get();
        console.log(`Snapshot :`,userSnapShot)
        const l = {...userSnapShot.data()}
        console.log(l)
        // ? Use user Data to create action with user Object as payload
        // ? put sends return object back to redux flow
        yield put(googleSignInSuccess({
            id: userSnapShot.id,
            ...userSnapShot.data()
        }))

    } catch (error) {
        yield put(googleSignInFailure(error))
    }

}

export function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

// ? Export Sagas to root rootSaga
export function* userSagas() {

    yield all([
        call(onGoogleSignInStart)
    ])

}