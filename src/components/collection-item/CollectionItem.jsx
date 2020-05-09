import React from 'react';

import CustomButton from '../shared/button/custom-button'

import './collection-item.scss'

const CollectionItem = (props) => {
    return (
        <div className="collection-item">

            <div
                className='collection-item-image'
                style={{ backgroundImage: `url(${props.imageUrl})` }}>

            </div>

            <div className="collection-item-footer">
                <span className='collection-item-footer-name'> {props.name}</span>
                <span className='collection-item-footer-price'>{props.price}$</span>
            </div>

            <CustomButton inverted >ADD TO CART</CustomButton>

        </div>
    );
};

export default CollectionItem;