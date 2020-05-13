import React from 'react';

import { Link } from "react-router-dom";
import { auth } from '../config/firebase/firebase-util'
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartVisibility } from '../../redux/cart-dropdown/selectors/cart'
import { selectUserStatus } from '../../redux/user/selectors/user-selectors'

// ? Necesssary naming to import svg file
import { ReactComponent as Logo } from '../../assets/logo.svg'

import CartIcon from '../cart/cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown';

import lodash from 'lodash'

import './header-styles.scss'

const Header = () => {

    // const currentUser = useSelector((state) => selectUserStatus(state), lodash.isEqual)

    // ? When not memoized, this selector will run no matter what dispatch action ocurs
    // const cartDropdownHidden = useSelector((state) => 
    // {
    //  console.log('Cart Visible Selector')   
    //  return state.cartDropDown.hideCart },lodash.isEqual)

    // ? Reselect(npm) lets us create memoized selectors, so useSelector won't run 
    // ? unless it's computed output is the same as before the action dispatched
    // ? (Will still rerender if parent rerenders unless using connect or React.memo)
    // const cartDropdownHidden = useSelector((state) => selectCartVisibility(state), lodash.isEqual)

    // ? Structured selector makes it easier to add and use multiple selectors
    const structuredSelector = createStructuredSelector({
        currentUser: (state) => selectUserStatus(state),
        cartDropdownHidden: (state) => selectCartVisibility(state)
    })

    const { currentUser, cartDropdownHidden } = useSelector(structuredSelector, lodash.isEqual);

    const signOut = async () => {
        await auth.signOut();
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

                    currentUser ?
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

                <CartIcon />

            </div>

            {
                cartDropdownHidden ?
                    null :
                    <CartDropdown />
            }

        </div>
    );
};

export default React.memo(Header);