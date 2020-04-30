import React, { useState } from 'react';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import SHOP_COLLLECTION from './staticData'

import './shop.scss'

const Shop = () => {

    const [itemCollections, setitemCollection] = useState(SHOP_COLLLECTION)

    const collections = [...itemCollections]

    return (

        <div className={'shop-page'}>

            {

                collections.map(({ id, ...otherCollectionProps }) => {
                    return <CollectionPreview key={id} {...otherCollectionProps} />
                })

            }

        </div>
    );


};

export default Shop;