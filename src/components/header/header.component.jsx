import React from 'react';
// import {Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { ReactComponent as Logo} from '../../assets/original.svg';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
// import CartDropdown from '../cart-drop-down/cart-drop-down.component';
import CartDropdownContainer  from '../cart-drop-down/cart-drop-down.container';
import {signOutStart} from '../../redux/user/user.actions';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import  {selectCurrentUser} from '../../redux/user/user.selector';
import {HeaderContainer, LogoContainer, OptionContainer, OptionLink} from './header.styles';
// import "./header.style.scss";






const Header = ({currentUser , hidden, signOutStart} ) => (
    <HeaderContainer>
        <LogoContainer to='/'>
        <Logo className='logo'/> 
        </LogoContainer>
        <OptionContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ?
                <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
                :
                <OptionLink to='/signin'>SIGN IN</OptionLink>
            }
            <CartIcon/>


        </OptionContainer>
        {hidden ? null :
        <CartDropdownContainer />
        }
    </HeaderContainer>


)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});


const mapDsipatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDsipatchToProps)(Header);
