import { all, call } from 'redux-saga/effects'

import { userSagas } from '../user/user-sagas'
import { cartSagas } from '../cart-dropdown/cart-sagas'
import { shopSagas } from '../shop/shop-sagas'

export function* rootSaga() {

    // ? Listens for multiple effects
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])

}