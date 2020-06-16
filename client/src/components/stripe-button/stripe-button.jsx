import React from 'react';
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_swTY0zxorbkFik3g0gjh5Qq400wSMrNfsJ'

    // When Payment is made token is returned
    const onToken = (token) => {

        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token: token
            }
        })
            .then(response => {
                alert('succesful payment');
            })
            .catch(error => {
                console.log('Payment Error: ', error);
                alert(
                    'There was an issue with your payment! Please make sure you use the provided credit card.'
                );
            });

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