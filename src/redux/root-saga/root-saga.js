import { all, call } from 'redux-saga/effects'

import { userSagas } from '../user/user-sagas'
import { cartSagas } from '../cart-dropdown/cart-sagas'
import { fetchCollectionStart } from '../shop/shop-sagas'

export function* rootSaga() {

    // ? Listens for multiple effects
    yield all([
        call(fetchCollectionStart),
        call(userSagas),
        call(cartSagas)
    ])

}