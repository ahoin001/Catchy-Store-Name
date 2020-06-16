import React, { useState } from 'react';
import Login from '../../components/login/DynamicLogin'
import SignUp from '../../components/login/DynamicSignUp'

const UserAuth = () => {

    const [toggle, setToggle] = useState(false)

    return (

        <div className={`container ${toggle ? 's--signup' : ''}`}>

            <Login />

            <div className="sub-cont">

                <div className="img">

                    <div className="img__text m--up">
                        <h2>New here?</h2>
                        <p>Sign up and discover great amount of new opportunities!</p>
                    </div>

                    <div className="img__text m--in">
                        <h2>One of us?</h2>
                        <p>If you already has an account, just sign in. We've missed you!</p>
                    </div>

                    <div
                        className="img__btn"
                        onClick={() => { setToggle(!toggle) }}>
                        <span className="m--up">Sign Up</span>
                        <span className="m--in">Sign In</span>
                    </div>

                </div>

                <div className="form sign-up">

                    <SignUp />

                </div>

            </div>

        </div>
    );
};

export default UserAuth;