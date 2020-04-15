import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import './stripe-button.styles.scss';



const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = "pk_test_UZEfwp6PiOzYRODNjF9Aiqyr00w8wJJSCh"
    
    const onToken = token => {
       axios({
           url: 'payment', 
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       }).then(response => {
           alert('Payment successful')
       }).catch(error => {
           console.log('Payment error:', JSON.parse(error))
           alert('There was an issue with your payment. Please meke sure you use the providedn credid card')
       })
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