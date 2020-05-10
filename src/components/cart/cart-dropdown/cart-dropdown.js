import React from 'react';
import { connect } from 'react-redux'

import CustomButton from "../../shared/button/custom-button";
import CartItem from "../cart-item/cart-item";

import './cart-dropdown.scss'

const CartDropdown = (props) => {

    return (
        <div className="cart-dropdown">

            <div className="cart-items">
                {props.cartItems.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    );


};

const mapStateToProps = (state) => ({
    cartItems: state.cartDropDown.cartItems
})

const mapDispatchToProps = (dispatch) => {

}



export default connect(mapStateToProps)(CartDropdown);