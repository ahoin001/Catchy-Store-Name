import React from 'react';
import lodash from 'lodash'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart-dropdown/selectors/cart'
import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import { CartIconContainer } from "./cart-icon-styles";

import { ReactComponent as ShoppingCartIcon } from "../../../assets/shoppingbag.svg";

const CartIcon = () => {

    const totalItems = useSelector((state) => selectCartItemsCount(state), lodash.isEqual)

    const dispatch = useDispatch()

    // console.log("Cart Icon &/or List rendering");

    return (

        <CartIconContainer
            onClick={() => dispatch(toggleCartDisplay())}
        >

            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">{totalItems}</span>

        </CartIconContainer>
    );

};

export default React.memo(CartIcon);    