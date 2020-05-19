import React from 'react';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionItem from '../../components/collection-item/CollectionItem'
import { selectStoreCollection } from '../../redux/shop/shop-selectors'

import './collection.scss'

const Collection = ({ match }) => {

    // console.log(`&&&&&&&&&&&&&&&&&&&&&&& MATCH PARAM FROM CATEGORY PAGE: ${match.params.collectionId}`)

    // ? Structured selector makes it easier to add and use multiple selectors
    const structuredSelector = createStructuredSelector({

        // ? Pass in props then run returned function with state
        collection: (state) => selectStoreCollection(match.params.collectionId)(state)
    })

    const { collection } = useSelector(structuredSelector)

    // console.log('@@@@@@@@@@@@@@@@@ COLLECTION: ', collection)

    return (
        <div className='collection-page'>
            <h2 className="title">{collection.title}</h2>
            <div className="items">
                {
                    collection.items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    );
};

export default Collection;