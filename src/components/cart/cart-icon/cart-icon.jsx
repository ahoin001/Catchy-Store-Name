import React from 'react';
import lodash from 'lodash'

import { useSelector, useDispatch } from 'react-redux'
import { selectCartItemsCount } from '../../../redux/cart-dropdown/selectors/cart'
import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import { ReactComponent as ShoppingCartIcon } from "../../../assets/shoppingbag.svg";

import './cart-icon.scss'

const CartIcon = () => {

    const totalItems = useSelector((state) => selectCartItemsCount(state), lodash.isEqual)

    const dispatch = useDispatch()

    console.log("SnackList rendering");

    return (

        <div
            className="cart-icon"
            onClick={() => dispatch(toggleCartDisplay())}
        >

            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">{totalItems}</span>

        </div>
    );

};

export default React.memo(CartIcon);    