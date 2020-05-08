import React from 'react';
import { Link, withRouter } from "react-router-dom";
// HOF that allows component to access redux store and dispatch actions
import { connect } from "react-redux";

import { auth } from '../config/firebase/firebase-util'

// ? Necesssary naming to import svg file
import { ReactComponent as Logo } from '../../assets/logo.svg'


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

                <Link className="link" to="/">
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

// state argument will be supplied by connect (the root reducer in the redux setup)
// ? this will take currentUser value from state and provide it to this component as a prop
const mapStateToProps = (state) => (

    // ? This object will be spread to props object and available for connected connected component
    {
        currentUser: state.user.currentUser
    }

)

// Syntax is excecutinng connect, and then passing wrapped header into that retruned function as a argument for use again
export default connect(mapStateToProps)(withRouter(Header));