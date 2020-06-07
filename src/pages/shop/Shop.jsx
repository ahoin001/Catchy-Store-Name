import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchCollectionsStart } from '../../redux/shop/shop-actions'

// ? Container logic handles components deciding whether they will render or load themselves
import CollectionPageContainer from '../collection/collection-container'
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview-container';

import Collection from '../collection/collection'

import './shop.scss'
import WithSpinner from '../../components/with-spinner/with-spinner';



const CollectionWithSpinner = WithSpinner(Collection)

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    const dispatch = useDispatch();

    const fetchCollectionsAsyncAction = React.useCallback(
        () => dispatch(fetchCollectionsStart()),
        [dispatch]
    )

    // ? Async actions to firebase to get store data
    useEffect(() => {

        fetchCollectionsAsyncAction()

    },[fetchCollectionsAsyncAction])


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
                component={CollectionWithSpinner}
            />

        </div>
    );

};

export default Shop;