import React from 'react';
import { connect } from 'react-redux'

import { toggleCartDisplay } from '../../../redux/cart-dropdown/cart-dropdown-actions'

import { ReactComponent as ShoppingCartIcon } from "../../../assets/shoppingbag.svg";

import './cart-icon.scss'

const CartIcon = (props) => {


    return (
        <div
            className="cart-icon"
            onClick={() => props.toggleCartDropDown()}
            >


            <ShoppingCartIcon className="shopping-icon" />
            <span className="item-count">0</span>

        </div>
    );


};

// dispatch provided by connect
const mapDispatchToProps = dispatch => {
    
    // ? this object will be spread to props
    return {

        // ? Dispatch excecutes action creator function with user argument and returns the action object for dispatch excecution
        toggleCartDropDown: () => dispatch(toggleCartDisplay())

    }
}


export default connect(null, mapDispatchToProps)(CartIcon);    