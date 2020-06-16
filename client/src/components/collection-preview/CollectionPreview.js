import React from 'react';
import CollectionItem from '../collection-item/CollectionItem'

import './collection-preview.scss'


const CollectionPreview = (props) => {

    // console.log(`PROPS IM LOOGIN FOR &&&&&&&&`,props)

    return (
        <div className="collection-preview-container">

            <h1 className="collection-title">{props.title.toUpperCase()}</h1>

            <div className="collection-preview">

                {/* Render 9 menu items from each collection for their preview */}
                {
                    props.items.filter((element, index) => index < 4)
                        .map((item) => {
                            return <CollectionItem key={item.id} item={item} />
                        })
                }

            </div>

        </div>
    );

};

export default CollectionPreview;