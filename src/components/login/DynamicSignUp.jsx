import React, { useState } from 'react';
import FormInput from '../shared/forminput/FormInput'
import { auth, createUserProfileDocument } from '../config/firebase/firebase-util'

import './dynamic.scss'
import '../shared/button/google-button.scss'

const Login = () => {

    const [userInput, setuserInput] = useState({ name: '', email: '', password: '' })


    const handleSignUp = async (event) => {

        event.preventDefault();

        const { name, email, password } = userInput

        // if (password !== confirmPassword) {
        //     alert('Passwords do not match')
        //     return;
        // }

        try {

            // ? Creates user and signs user in, returns object with user key to get user data
            // ? This saves user in Firebase authentication, but not our database where user data can be used 
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            console.log('User from sign up: ', user)

            // ? Save the user as a document to firestore
            await createUserProfileDocument(user, { name })

            // Clear form 
            setuserInput(
                {
                    name: '',
                    email: '',
                    password: '',
                }
            )

        } catch (error) {
            console.log('Error creation',error)
        }

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

            {/* <FormInput
                name='confirmPassword'
                type='password'
                handleChange={handleUserInput}
                value={userInput.password}
                label='Confirm Password'
                required
            /> */}

            <button type="button" className="submit" onClick={handleSignUp}>Sign Up</button>
            <button onClick={() => { }} type="button" className="loginBtn loginBtn--google">Join with <span>Google</span></button>

            {/* <input type="submit" value="Submit Form" /> */}

        </form>

    );

};

export default Login;