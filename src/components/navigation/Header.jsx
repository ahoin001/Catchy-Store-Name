import React from 'react';
import { Link, withRouter } from "react-router-dom";

// ? Necesssary naming to import svg file
import { ReactComponent as Logo } from '../../assets/logo.svg'

import { auth } from '../config/firebase/firebase-util'

import './header-styles.scss'

const Header = (props) => {

    const signOut = async () => {
        await auth.signOut()
            .then(() => props.history.push('/'))
    }


    return (
        <div className="header">

            <Link
                className="logo-container"
                to="/"
            >
                <Logo className="logo" />

            </Link>

            <div className="nav-links">

                <Link className="link" to="/shop">
                    SHOP
                </Link>

                <Link className="link" to="/signin">
                    Contact
                </Link>

                {

                    props.currentUser ?
                        <div
                            className="link"
                            onClick={signOut}
                        >
                            SIGN OUT
                        </div>
                        :
                        <Link className="link" to="/signin">
                            SIGN IN
                        </Link>

                }

            </div>

        </div>
    );
};

export default withRouter(Header);