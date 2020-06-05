import React from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartVisibility } from '../../redux/cart-dropdown/selectors/cart'
import { selectUserStatus } from '../../redux/user/selectors/user-selectors'

import { signOutStart } from '../../redux/user/user-actions'
import { HeaderContainer, LogoContainer, NavLinksContainer, StyledLink } from './header-styles'

// ? Necesssary naming to import svg file
import { ReactComponent as Logo } from '../../assets/logo.svg'

import CartIcon from '../cart/cart-icon/cart-icon'
import CartDropdown from '../cart/cart-dropdown/cart-dropdown';

import lodash from 'lodash'

// import './header-styles.scss'

const Header = () => {

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

    const dispatch = useDispatch()

    // const signOut = async () => {
    //     await auth.signOut();
    // }

    return (
        <HeaderContainer>

            <LogoContainer
                className="logo-container"
                to="/"
            >
                <Logo className="logo" />

            </LogoContainer>

            <NavLinksContainer>

                <StyledLink className="link" to="/shop">
                    SHOP
                </StyledLink>

                <StyledLink className="link" to="/">
                    Contact
                </StyledLink>

                {

                    currentUser ?
                        <StyledLink
                            as='div' // Replace styled component with new element, can be component
                            className="link"
                            onClick={() => dispatch(signOutStart())}
                        >
                            SIGN OUT
                        </StyledLink>
                        :
                        <StyledLink className="link" to="/signin">
                            SIGN IN
                        </StyledLink>

                }

                <CartIcon />

            </NavLinksContainer>

            {
                cartDropdownHidden ?
                    null :
                    <CartDropdown />
            }

        </HeaderContainer>
    );
};

export default React.memo(Header);