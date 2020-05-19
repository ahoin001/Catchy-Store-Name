import React from 'react';
import { Route } from 'react-router-dom'

import CollectionPage from '../collection/collection'
import CollectionsOverview from '../../components/collections-overview/collections-overview';


import './shop.scss'

// ? Shop component is nested in a route (check App.js) Route passes map, location and history props
const Shop = ({ match }) => {

    // console.log(`MATCH PROP = `, match)

    return (

        <div className={'shop-page'}>

            {/* Match will be current nested components route, so /shop */}
            <Route exact path={`${match.path}`} component={CollectionsOverview} />

            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

        </div>
    );


};

export default Shop;