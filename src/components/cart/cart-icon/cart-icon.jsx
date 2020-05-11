import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { getTotalItems } from '../../../redux/cart-dropdown/selectors/cart-items'
import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import { ReactComponent as ShoppingCartIcon } from "../../../assets/shoppingbag.svg";

import './cart-icon.scss'

const CartIcon = (props) => {


    // ************************************************************
    // * Started using react-redux hooks instead of connnect
    // ************************************************************

    const totalItems = useSelector((state) => getTotalItems(state))

    const dispatch = useDispatch()



    console.log("Cart Icon rendering. (SHOULD ONLY OCCUR AFTER APP STARTS WHEN ADDING OR REMOVING ITEMS< TANKS TO USESELECTOR");

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

// dispatch provided by connect
// const mapDispatchToProps = dispatch => {

//     // ? this object will be spread to props
//     return {

//         // ? Dispatch excecutes action creator function with user argument and returns the action object for dispatch excecution
//         toggleCartDropDown: () => dispatch(toggleCartDisplay())

//     }
// }

// ? Deconstruct to get nested property value from state object recieved by connect
// const mapStateToProps = ({ cartDropDown: { cartItems } }) => {
//     console.log(`I HAVE BEEN CALLED`)
//     return {
//         totalItems: cartItems.reduce((accumulator, currentValue) => {
//             return accumulator + currentValue.quantity
//         }, 0)
//     }

// }

export default CartIcon;    