import React from 'react';
import { withRouter } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { selectCartItems } from '../../../redux/cart-dropdown/selectors/cart'
import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import { 
    CartDropDownContainer, 
    CartItemsContainer, 
    EmptyMessageContainer, 
    CartDropdownButton } 
    from './cart-dropdown-styles'

import CartItem from "../cart-item/cart-item";

// ? Extract history from props
const CartDropdown = ({ history }) => {

    const cartItems = useSelector((state) => selectCartItems(state))

    const dispatch = useDispatch()
    const toggleDropDown = React.useCallback(
        () => dispatch(toggleCartDisplay()),
        [dispatch]
    )

    return (
        <CartDropDownContainer>

            <CartItemsContainer>

                {cartItems.length ?
                    cartItems.map((item) => <CartItem key={item.id} item={item} />) :
                    <EmptyMessageContainer> Your Cart is empty</EmptyMessageContainer>
                }

            </CartItemsContainer>

            <CartDropdownButton 
            onClick={() => {
                history.push('/checkout')
                toggleDropDown()
                }}
            >
            
            GO TO CHECKOUT
            
            </CartDropdownButton>

        </CartDropDownContainer>
    );

};

export default withRouter(React.memo(CartDropdown));