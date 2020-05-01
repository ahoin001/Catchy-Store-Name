import React, { useState } from 'react';
import FormInput from '../../components/shared/forminput/FormInput'
import './dynamic.scss'


const Login = () => {

    const [userInput, setuserInput] = useState({ email: '', password: '' })


    const handleSignIn = (event) => {

        event.preventDefault();
        setuserInput({ email: '', password: '' })

    }

    const handleUserInput = (e) => {

        // ? Name attribute in input allows getting the proper input
        console.log(`INPUT NAME: `, e.target.name)

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
            <button type="button" className="submit">Sign In</button>
            <button type="button" className="fb-btn">Connect with <span>facebook</span></button>

            {/* <input type="submit" value="Submit Form" /> */}

        </form>

    );

};

export default Login;