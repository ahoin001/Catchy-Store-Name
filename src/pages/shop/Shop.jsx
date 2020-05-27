import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { firestore, convertCollectionSnapShotToMap } from '../../components/config/firebase/firebase-util'

import { updateCollections } from '../../redux/shop/shop-actions'

import WithSpinner from '../../components/with-spinner/with-spinner'
import CollectionPage from '../collection/collection'
import CollectionsOverview from '../../components/collections-overview/collections-overview';

import './shop.scss'

const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    const [displayLoaingSpinner, setdisplayLoaingSpinner] = useState(true)

    const dispatch = useDispatch();
    const updateCollectionsAction = React.useCallback(
        (collection) => dispatch(updateCollections(collection)),
        [dispatch]
    )

    // ? Hit Firebase to make sure Firebase Collection gives us most recent store collection inventory 
    useEffect(() => {

        let unsubscribeFromSnapShot;

        const getShopData = () => {

            unsubscribeFromSnapShot = null;

            const collectionRef = firestore.collection('collections')

            collectionRef.get()
                .then(snapshot => {
                    const collectionsMap = convertCollectionSnapShotToMap(snapshot)
                    updateCollectionsAction(collectionsMap)
                    setdisplayLoaingSpinner(false)
                })

            // ? Whenever collection updates or is initialized , return snapshot object of collectionRef
            // unsubscribeFromSnapShot = collectionRef.onSnapshot(async snapshot => {

            //     const collectionsMap = convertCollectionSnapShotToMap(snapshot)
            //     // console.log('MAPPED OBJECT %%%%%%%%',collectionsMap)
            //     updateCollectionsAction(collectionsMap)
            //     setdisplayLoaingSpinner(false)
            // })

        }

        getShopData();

        // return () => {
        //     unsubscribeFromSnapShot()
        // }

    }, [])



    return (

        <div className={'shop-page'}>

            {/* Match path will be current nested components route, so /shop */}
            {/* Render accepts function that I use to pass props and a component */}
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionOverviewWithSpinner isLoading={displayLoaingSpinner} {...props} />}
            />

            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={displayLoaingSpinner} {...props} />}
            />

        </div>
    );


};

export default Shop;