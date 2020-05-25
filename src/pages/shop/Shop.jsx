import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { firestore, convertCollectionSnapShotToMap } from '../../components/config/firebase/firebase-util'

import CollectionPage from '../collection/collection'
import CollectionsOverview from '../../components/collections-overview/collections-overview';


import './shop.scss'

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    // console.log(`MATCH PROP = `, match)
    let unsubscribeFromSnapShot = null;

    useEffect(() => {

        const getShopData = () => {

            const collectionRef = firestore.collection('collections')

            // ? Whenever collection updates or is initialized , return snapshot object of collectionRef
            collectionRef.onSnapshot(async snapshot => {
                // console.log(snapshot)
                convertCollectionSnapShotToMap(snapshot)
            })

        }


        getShopData();

        return () => {
            // cleanup
        }
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