import React from 'react';

import { useSelector } from 'react-redux'
import { selectCartItems } from '../../../redux/cart-dropdown/selectors/cart'
import CustomButton from "../../shared/button/custom-button";
import CartItem from "../cart-item/cart-item";

import './cart-dropdown.scss'

const CartDropdown = () => {

    const cartItems = useSelector((state) => selectCartItems(state))

    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    );

};

export default React.memo(CartDropdown);