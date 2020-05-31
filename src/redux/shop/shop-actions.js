import { ShopActionTypes } from './shop-types'

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
