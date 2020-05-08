import React, { useState } from 'react';
import FormInput from '../shared/forminput/FormInput'
import { googleSignIn, auth } from '../config/firebase/firebase-util'

import './dynamic.scss'
import '../shared/button/google-button.scss'

const Login = () => {

    const [userInput, setuserInput] = useState({ email: '', password: '' })


    const handleSignIn = async (event) => {

        event.preventDefault();


        try {
            // ? Creates user and signs user in, returns object with user key to get user data
            // ? This saves user in Firebase authentication, but not our database where user data can be used 
            const { user } = await auth.signInWithEmailAndPassword(userInput.email, userInput.password)

            console.log('User from sign up: ', user)

        } catch (error) {
            console.log('Error creation', error)
        }

        setuserInput({ email: '', password: '' })
        console.log(`CLEARED INPUTS`)

    }

    const handleUserInput = (e) => {

        // ? Name attribute in input allows getting the proper input
        // console.log(`INPUT NAME: `, e.target.name)

        // ? Copy UserInput, Then change one property
        // ? (Will modify not add if new property would have been in spread)
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
            <button onClick={googleSignIn} type="button" className="loginBtn loginBtn--google">Connect with <span>Google</span></button>

            {/* <input type="submit" value="Submit Form" /> */}

        </form>

    );

};

export default Login;