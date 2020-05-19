import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectCartItems, selectCartTotal } from './../../redux/cart-dropdown/selectors/cart'

import CheckoutItem from '../../components/checkout-item/checkout-item'
import StripeButton from '../../components/stripe-button/stripe-button'


import './checkout.scss'

const Checkout = () => {

    // ? Structured selector makes it easier to add and use multiple selectors
    const structuredSelector = createStructuredSelector({
        cartItems: (state) => selectCartItems(state),
        cartTotal: (state) => selectCartTotal(state)
    })

    const { cartItems, cartTotal } = useSelector(structuredSelector, shallowEqual);

    return (
        <div className="checkout-page">

            <div className="checkout-header">

                <div className="header-block">

                    <span>Product</span>

                </div>

                <div className="header-block">

                    <span>Description</span>

                </div>

                <div className="header-block">

                    <span>Quantity</span>

                </div>

                <div className="header-block">

                    <span>Price</span>

                </div>

                <div className="header-block">

                    <span>Remove</span>

                </div>

            </div>

            {cartItems.map((item) => <CheckoutItem key={item.id} cartItem={item} />)}

            <div className="total">
                <span>TOTAL: ${cartTotal}</span>
            </div>

            <div className="test-warning">
                *Please use this test card for payments*
            <br />
            4242 4242 4242 4242 CV:123 Exp: 01/22
            </div>
            <StripeButton price={cartTotal} />

        </div>

    );

};

export default Checkout;