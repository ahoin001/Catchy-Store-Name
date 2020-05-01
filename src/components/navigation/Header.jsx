import React from 'react';
import { Link } from "react-router-dom";
// ? Necesssary naming to import svg file
import { ReactComponent as Logo } from '../../assets/logo.svg'

import './header-styles.scss'

const Header = () => {
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
                    SIGN IN
                </Link>

                <Link className="link" to="/shop">
                    SHOP
                </Link>

            </div>

        </div>
    );
};

export default Header;