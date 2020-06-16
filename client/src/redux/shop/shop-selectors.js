import { createSelector } from 'reselect'

export const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => {
        console.log(`shop collections selector: `, shop.collections)
        return shop.collections
    }
)

// ? Converts object(HASHMAP) of collectinos into an array (for .map used in project)
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => {
        // console.log(`SELECTING SHOP Collections :`,collections)
        // console.log(`shopCollections collections into an array selector: `, Object.keys(collections).map(key => collections[key]));
        return collections ? Object.keys(collections).map(key => collections[key]) : []
    }
)

// ? USES THE HASH MAP
export const selectStoreCollection = (collectionUrlParam) => createSelector(
    [selectShopCollections],
    shopCollections => {
        console.log(`shop specific collection selector: `, shopCollections[collectionUrlParam])
        return shopCollections ? shopCollections[collectionUrlParam] : null
    }

)

export const selectIsFetchingCollections = createSelector(
    [selectShop],
    (shopState) => {
        // console.log(`shop is fetching boolean selector: `, shopState.isFetching)
        return shopState.isFetching
    }
)

export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    (shopState) => {
        return !!shopState.collections
    }
)

