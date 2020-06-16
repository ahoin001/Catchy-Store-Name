import { takeLatest, put, all, call } from 'redux-saga/effects'

// import cartActionTypes from './cart-dropdown-types'
import UserActionTypes from '../user/user-types'

import { clearCart } from './cart-dropdown-actions'


// ***************************************************************
//  Watcher Sagas
// ***************************************************************

export function* onSignOutSuccess() {
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}


// ***************************************************************
//  Worker Sagas
// ***************************************************************

export function* clearCartOnSignOut() {

        yield put(clearCart())

}

export function* cartSagas() {

    yield all([
        call(onSignOutSuccess)
    ])

}