import React from 'react';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsFetchingCollections } from '../../redux/shop/shop-selectors'

import CollectionOverview from './collections-overview'
import WithSpinner from '../with-spinner/with-spinner'

const CollectionsOverviewContainer = (props) => {

    const structuredSelector = createStructuredSelector({
        isFetchingCollections: (state) => selectIsFetchingCollections(state)
    })

    const { isFetchingCollections } = useSelector(structuredSelector);

    return (
        <CollectionOverview isLoading={isFetchingCollections} {...props} />
    )

};

export default WithSpinner(CollectionsOverviewContainer);