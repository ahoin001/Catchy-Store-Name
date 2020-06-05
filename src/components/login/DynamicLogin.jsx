import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { googleSignInStart, emailSignInStart, } from '../../redux/user/user-actions'

import FormInput from '../shared/forminput/FormInput'

import './dynamic.scss'
import '../shared/button/google-button.scss'

const Login = () => {

    const [userInput, setuserInput] = useState({ email: '', password: '' })

    const dispatch = useDispatch()

    const handleSignIn = async (event) => {

        event.preventDefault();

        const { email, password } = userInput

        dispatch(emailSignInStart({email, password}));

        // setuserInput({ email: '', password: '' })
        // console.log(`CLEARED INPUTS`)

    }

    const handleUserInput = (e) => {

        // ? Name attribute in input allows getting the proper input
        // console.log(`INPUT NAME: `, e.target.name)

        // ? Copy UserInput, Then change one property
        // ? (Will modify not add if new property would have been in spread i.e if target was name, name would not be copied but reeplaced with new value)
        setuserInput(
            {
                ...userInput,
                [e.target.name]: e.target.value,
            }
        )

    }

    return (

        <form
            className="form sign-in"
            onSubmit={handleSignIn}
        >

            <h2>Welcome back</h2>

            <FormInput
                name='email'
                type='email'
                handleChange={handleUserInput}
                value={userInput.email}
                label='Email'
                required
            />

            <FormInput
                name='password'
                type='password'
                handleChange={handleUserInput}
                value={userInput.password}
                label='Password'
                required
            />

            <p className="forgot-pass">Forgot password?</p>
            <button type="button" className="submit" onClick={handleSignIn}>Sign In</button>
            <button onClick={() => dispatch(googleSignInStart())} type="button" className="loginBtn loginBtn--google">Connect with <span>Google</span></button>

        </form>

    );

};

export default Login;