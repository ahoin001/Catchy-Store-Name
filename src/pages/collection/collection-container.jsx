import React from 'react';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors'

import Collection from './collection'
import WithSpinner from '../../components/with-spinner/with-spinner'

const CollectionsContainer = (props) => {

    const structuredSelector = createStructuredSelector({
        isLoadingCollections: (state) => !selectIsCollectionsLoaded(state)
    })

    const { isLoadingCollections } = useSelector(structuredSelector);
    console.log(`$$$$$$$$$$$$$$$$$$$: `, isLoadingCollections)

    return (
        <Collection isLoading={!isLoadingCollections} {...props} />
    )

};

export default WithSpinner(CollectionsContainer);