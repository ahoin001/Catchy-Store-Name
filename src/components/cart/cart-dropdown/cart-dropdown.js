import React from 'react';
import { useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { selectCartItems } from '../../../redux/cart-dropdown/selectors/cart'

import CustomButton from "../../shared/button/custom-button";
import CartItem from "../cart-item/cart-item";

import './cart-dropdown.scss'

// ? Extract history from props
const CartDropdown = ({ history }) => {

    const cartItems = useSelector((state) => selectCartItems(state))

    return (
        <div className="cart-dropdown">

            <div className="cart-items">

                {cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} item={item} />) :
                    <span className="empty-message"> Your Cart is empty</span>
                }

                {/* {cartItems.map((item) => <CartItem key={item.id} item={item} />)} */}

            </div>

            <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>

        </div>
    );

};

export default withRouter(React.memo(CartDropdown));