import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import CartItem from '../cart-item/cart-item.component';


import './cart-drop-down.style.scss';

const CartDropdown = ({cartItems}) => (

    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
            cartItems.map(cartItem => (
                <CartItem key={cartItem.id} item={cartItem}/>
            )
            )}
            </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


const mapStateToProsp = (state) => ({
    cartItems: selectCartItems(state)
})


export default connect(mapStateToProsp)(CartDropdown);