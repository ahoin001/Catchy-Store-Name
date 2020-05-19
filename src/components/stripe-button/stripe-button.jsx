import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_swTY0zxorbkFik3g0gjh5Qq400wSMrNfsJ'

    // When Payment is made token is returned
    const onToken = (token) => {
        console.log(token)
    }


    return (
        <StripeCheckout
            label='Pay Now'
            name='DMN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/LGM.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />

    );


};

export default StripeButton;