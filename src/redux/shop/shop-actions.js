import { ShopActionTypes } from './shop-types'
import { firestore, convertCollectionSnapShotToMap } from '../../components/config/firebase/firebase-util'

// ? Switches Reducer fetching state
export const fetchCollectionsStart = () => {
    return {
        type: ShopActionTypes.FETCH_COLLECTIONS_START,
    }
}


export const fetchCollectionsSuccess = (collectionMap) => ({

    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionMap

})


export const fetchCollectionsFailure = (errorMessage) => ({

    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage

})

// ? With thunk middleware enabled, any dispatch of a function instead of an object will 
// ? be given dispatch as it's' first argument. Now can dispatch multiple actions so we can do multiple async actions
export const fetchCollectionsStartAsync = () => {

    // ? Thunks are just functions that return a function with access to dispatch, so we can dispatch multiple actions
    return dispatch => {

        const collectionRef = firestore.collection('collections')
        dispatch(fetchCollectionsStart())

        collectionRef.get()
            .then(snapshot => {
                const collectionsMap = convertCollectionSnapShotToMap(snapshot)
                // console.log(`&&&&&&&&&&&&&&&&&&&&&&&&& MAP: `,collectionsMap)
                dispatch(fetchCollectionsSuccess(collectionsMap))
            })
            .catch(error => dispatch(fetchCollectionsFailure(error)))

    }
}
