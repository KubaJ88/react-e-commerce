import React, {useState} from 'react';
import {connect} from 'react-redux';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';

import {signUpStart} from '../../redux/user/user.actions';

import './sing-up.styles.scss';




const SignUp = ({signUpStart}) => {

    const [userDetails, setUserDetails] = useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });

   
    const {displayName, email, password,confirmPassword} = userDetails


    const handleSubmit = async event => {
        event.preventDefault();
        
        // const {signUpStart} = this.props;

        // const {displayName, email, password,confirmPassword} = this.state;

        if(password!= confirmPassword) {
            alert("password don't matach");
            return
        }

        signUpStart({displayName, email, password})

        

         


        }

      



    

    const handleChange= event => { 
        const {name, value} = event.target;

        setUserDetails({...userDetails, [name]:value});

    }



    
        
        return(


            
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>Sing up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange = {handleChange}
                    label='Display Name'
                    required
                    />
                        <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange = {handleChange}
                    label='Email'
                    required
                    />
                        <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange = {handleChange}
                    label='Password'
                    required
                    />
                        <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange = {handleChange}
                    label='confirmPassword'
                    required
                    />

                    <CustomButton type='submit'>SING UP</CustomButton>

                </form>
            </div>
        )
    }



const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
}) 

export default connect(null,mapDispatchToProps)(SignUp)
