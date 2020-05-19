import React from 'react';
import { useDispatch } from 'react-redux'

import { removeCartItem, addCartItem, removeCartItemAtChekout } from '../../redux/cart-dropdown/cart-dropdown-actions'

import './checkout-item.scss'

const CheckoutItem = ({ cartItem }) => {
    const { name, quantity, price, imageUrl } = cartItem
    const dispatch = useDispatch()

    return (
        <div className="checkout-item">

            <div className="image-container">

                <img src={imageUrl} alt="item" />

            </div>

            <span className="name">{name}</span>

            <span className="quantity">

                <div
                    className="arrow"
                    onClick={() => dispatch(removeCartItemAtChekout(cartItem))}>
                    &#10094;
                </div>

                <span className="value">{quantity}</span>

                <div
                    className="arrow"
                    onClick={() => dispatch(addCartItem(cartItem))}
                >
                    &#10095;
                </div>

            </span>

            <span className="price">${price * quantity}</span>
            <span
                className="remove-button"
                onClick={() => dispatch(removeCartItem(cartItem))}
            > &#10005;</span>

        </div>
    );
};

export default CheckoutItem;