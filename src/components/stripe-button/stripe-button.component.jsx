import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

import './stripe-button.styles.scss';


const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_UZEfwp6PiOzYRODNjF9Aiqyr00w8wJJSCh"
    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }


    return (

        <StripeCheckout 
        label='Pay Now'
        name='E-commerce'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay now'
        token={onToken}
        stripeKey={publishableKey} />

    )
}


export default StripeCheckoutButton;