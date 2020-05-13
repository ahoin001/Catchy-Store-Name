import React from 'react';
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../../redux/cart-dropdown/selectors/cart'
import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import CustomButton from "../../shared/button/custom-button";
import CartItem from "../cart-item/cart-item";

import './cart-dropdown.scss'

// ? Extract history from props
const CartDropdown = ({ history }) => {

    const cartItems = useSelector((state) => selectCartItems(state))

    const dispatch = useDispatch()
    const toggleDropDown = React.useCallback(
        () => dispatch(toggleCartDisplay()),
        [dispatch]
    )

    return (
        <div className="cart-dropdown">

            <div className="cart-items">

                {cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} item={item} />) :
                    <span className="empty-message"> Your Cart is empty</span>
                }

                {/* {cartItems.map((item) => <CartItem key={item.id} item={item} />)} */}

            </div>

            <CustomButton 
            onClick={() => {
                history.push('/checkout')
                toggleDropDown()
                }}
            >
            
            GO TO CHECKOUT
            
            </CustomButton>

        </div>
    );

};

export default withRouter(React.memo(CartDropdown));