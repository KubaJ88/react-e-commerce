import React from 'react';
import SignIn from '../../components/sign-in/sign.component';
import SignUp from '../../components/sing-up/sing-up.component';

import './sing-in-and-sing-out page.styles.scss';

const SignInAndSingUpPage = () => (
    <div className='sign-in-and-sign-up'>
        <SignIn/>
        <SignUp/>
        </div>

);


export default SignInAndSingUpPage;