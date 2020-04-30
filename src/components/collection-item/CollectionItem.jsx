import React from 'react';

import './collection-item.scss'

const CollectionItem = (props) => {
    return (
        <div className= "collection-item">
            
            <div 
            className='collection-item-image'
            style = {{ backgroundImage: `url(${props.imageUrl})`}}>

            </div>

            <div className="collection-item-footer">
                <span className='collection-item-footer-name'> {props.name}</span>
                <span className='collection-item-footer-price'>{props.price}$</span>
            </div>

        </div>
    );
};

export default CollectionItem;