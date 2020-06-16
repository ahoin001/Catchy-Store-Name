import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { signUpStart } from '../../redux/user/user-actions'
import FormInput from '../shared/forminput/FormInput'

import './dynamic.scss'
import '../shared/button/google-button.scss'

const Login = () => {

    const [userInput, setuserInput] = useState({ name: '', email: '', password: '' })

    const dispatch = useDispatch()

    const handleSignUp = async (event) => {

        event.preventDefault();

        const { name, email, password } = userInput

        dispatch(signUpStart({ name, email, password }))

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
            className="form sign-up"
            onSubmit={handleSignUp}
        >

            <h2>Time to feel like home</h2>

            <FormInput
                name='name'
                type='text'
                handleChange={handleUserInput}
                value={userInput.name}
                label='Name'
                required
            />

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

            <button type="button" className="submit" onClick={handleSignUp}>Sign Up</button>
            {/* <button onClick={() => { }} type="button" className="loginBtn loginBtn--google">Join with <span>Google</span></button> */}

        </form>

    );

};

export default Login;