import { createSelector } from 'reselect'

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => {
        console.log(`shop collections selector: `, shop.collections)
        return shop.collections
    }
)

// Converts object of collectinos into an array
export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    (collections) => {
        console.log(`SELECTING SHOP HOPEFULY :`,collections)
        console.log(`shopCollections collections into an array selector: `, Object.keys(collections).map(key => collections[key]));
        return Object.keys(collections).map(key => collections[key])
    }
)

export const selectStoreCollection = (collectionUrlParam) =>
    createSelector(
        [selectShopCollections],
        shopCollection => {
            console.log(`shop specific collection selector: `, shopCollection[collectionUrlParam])
            return shopCollection[collectionUrlParam]
        }

    )
