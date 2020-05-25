import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { firestore, convertCollectionSnapShotToMap } from '../../components/config/firebase/firebase-util'

import { updateCollections } from '../../redux/shop/shop-actions'

import CollectionPage from '../collection/collection'
import CollectionsOverview from '../../components/collections-overview/collections-overview';


import './shop.scss'

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    const dispatch = useDispatch();
    const updateCollectionsAction = React.useCallback(
        (collection) => dispatch(updateCollections(collection)),
        [dispatch]
    )
  
    useEffect(() => {

        const getShopData = () => {

            let unsubscribeFromSnapShot = null;

            const collectionRef = firestore.collection('collections')

            // ? Whenever collection updates or is initialized , return snapshot object of collectionRef
            unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {

                const collectionsMap = convertCollectionSnapShotToMap(snapshot)
                // console.log('MAPPED OBJECT %%%%%%%%',collectionsMap)
                updateCollectionsAction(collectionsMap)

            })

        }

        getShopData();

    }, [])

    return (

        <div className={'shop-page'}>

            {/* Match path will be current nested components route, so /shop */}
            <Route exact path={`${match.path}`} component={CollectionsOverview} />

            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

        </div>
    );


};

export default Shop;