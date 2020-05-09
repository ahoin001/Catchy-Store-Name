import React from 'react';
import { connect } from 'react-redux'
import { addCartItem } from '../../redux/cart-dropdown/cart-dropdown-actions'

import CustomButton from '../shared/button/custom-button'

import './collection-item.scss'

const CollectionItem = (props) => {

    return (
        <div className="collection-item">

            <div
                className='collection-item-image'
                style={{ backgroundImage: `url(${props.item.imageUrl})` }}>

            </div>

            <div className="collection-item-footer">
                <span className='collection-item-footer-name'> {props.item.name}</span>
                <span className='collection-item-footer-price'>{props.item.price}$</span>
            </div>

            <CustomButton
                inverted
                onClick={(e) => {console.log(e.target); props.addItem(props.item)}}
            >
                ADD TO CART
            </CustomButton>

        </div>
    );
};

// const mapStateToProps = (state) => ({



// })

const mapDispatchToProps = (dispatch) => ({

    addItem: (item) => dispatch(addCartItem(item))

})


export default connect(null, mapDispatchToProps)(CollectionItem);