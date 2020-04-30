import React from 'react';
import CollectionItem from '../collection-item/CollectionItem'

import './collection-preview.scss'


const CollectionPreview = (props) => {


    return (
        <div className="collection-preview-container">

            <h1 className="collection-title">{props.title.toUpperCase()}</h1>

            <div className="collection-preview">

                {/* Render 4 menu items from each collection for their preview */}
                {
                    props.items.filter((id, index) => index < 9)
                    .map(({id,...otherItemProps}) => {
                        return <CollectionItem key={id} {...otherItemProps}/>
                    })
                }

            </div>

        </div>
    );

};

export default CollectionPreview;