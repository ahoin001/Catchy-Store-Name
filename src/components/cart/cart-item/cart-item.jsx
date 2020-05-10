import React from 'react';

import './cart-item.scss'


// ? Destructure object off props, then the nested values in tat object , useful to avoid props. syntax
const CartItem = ({ item: { name, price, imageUrl, quantity } }) => {

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="item" />
            <div className="item-details">
                <span className="name">{name}</span>
                <span className="price"> {quantity} x {price}</span>
            </div>
        </div>
    );
};

export default CartItem;