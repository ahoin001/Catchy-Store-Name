import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'

// ? Container logic handles components deciding whether they will render or load themselves
import CollectionPageContainer from '../collection/collection-container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';

import './shop.scss'

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    const dispatch = useDispatch();

    const fetchCollectionsAsyncAction = React.useCallback(
        () => dispatch(fetchCollectionsStartAsync()),
        [dispatch]
    )

    // ? Async actions to firebase to get store data
    useEffect(() => {

        const getShopData = () => {

            fetchCollectionsAsyncAction()

        }

        getShopData();

    }, [])


    return (

        <div className={'shop-page'}>

            {/* Match path will be current nested components route, so /shop */}
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}

            />

            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />

        </div>
    );

};

export default Shop;