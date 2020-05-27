import React, { useEffect } from 'react';
import { Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions'
import { selectCollectionsIsFetching } from '../../redux/shop/shop-selectors'

import WithSpinner from '../../components/with-spinner/with-spinner'

import CollectionPage from '../collection/collection'
import CollectionsOverview from '../../components/collections-overview/collections-overview';

import './shop.scss'

// ? Give components loading screens using HOC
const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    // ? Structured selector makes it easier to add and use multiple selectors
    const structuredSelector = createStructuredSelector({
        isFetchingCollections: (state) => selectCollectionsIsFetching(state)
    })

    const { isFetchingCollections } = useSelector(structuredSelector);
    // console.log(`@@@@@@@@@@@@@@`,isFetchingCollections)

    const dispatch = useDispatch();

    const fetchCollectionsAsyncAction = React.useCallback(
        () => dispatch(fetchCollectionsStartAsync()),
        [dispatch]
    )



    // ? Hit Firebase when component mounts to make sure Firebase Collection gives us most recent store collections 
    useEffect(() => {

        const getShopData = () => {

            fetchCollectionsAsyncAction()
            
        }

        getShopData();

    }, [])



    return (

        <div className={'shop-page'}>

            {/* Match path will be current nested components route, so /shop */}
            {/* Render accepts function that I use to pass props and a component */}
            <Route
                exact
                path={`${match.path}`}
                render={(props) => <CollectionOverviewWithSpinner isLoading={isFetchingCollections} {...props} />}
            />

            <Route
                path={`${match.path}/:collectionId`}
                render={(props) => <CollectionPageWithSpinner isLoading={isFetchingCollections} {...props} />}
            />

        </div>
    );


};

export default Shop;