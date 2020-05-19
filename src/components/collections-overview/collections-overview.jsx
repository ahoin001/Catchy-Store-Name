import React from 'react';
import { useSelector } from "react-redux";
import { createStructuredSelector } from 'reselect'

import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors'

import CollectionPreview from '../collection-preview/CollectionPreview'

import './collection-overviews.scss'

const CollectionsOverview = () => {

    const structuredSelector = createStructuredSelector({
        collections: (state) => selectCollectionsForPreview(state)
    })

    const { collections } = useSelector(structuredSelector)

    return (
        <div className="collections-overview">

            {

                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })

            }

        </div>
    );

};

export default CollectionsOverview;