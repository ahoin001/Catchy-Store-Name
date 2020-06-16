import { takeLatest, call, put,all } from 'redux-saga/effects'

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop-actions'

import { firestore, convertCollectionSnapShotToMap } from '../../components/config/firebase/firebase-util'
import { ShopActionTypes } from './shop-types'

// ? Yields give control back to saga middlewre, so saga can cancel a saga if it wants/needs to
// ? takeLatest : will take tasks , but cancel previous ones if they are not finished and will use latest tasks
// ? takeEvery : Runs every task concurrently

// Generator functions necesarry for sagas 
function* fetchCollectionsAsync() {

    try {

        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()

        // ? call invokes function , within saga
        const collectionsMap = yield call(convertCollectionSnapShotToMap, snapshot)

        // ? Put is saga efffect to dispatch action
        yield put(fetchCollectionsSuccess(collectionsMap))

    } catch (error) {
        yield put(fetchCollectionsFailure(error))
    }

}

// ? Saga listening for fetch
export function* fetchCollectionStart() {

    // ? Latest becuase only need this task completed once
    yield takeLatest(
        ShopActionTypes.FETCH_COLLECTIONS_START, // action this saga listens for
        fetchCollectionsAsync // what is excecuted and controled by saga
    )

}


export function* shopSagas() {

    yield all([
        call(fetchCollectionStart)
    ])

}