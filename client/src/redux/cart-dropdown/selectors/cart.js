// ? Selectors for getting slices of state
// ? CreateSelector makes memoized selectors
// ? Memoized functions keep the same reference,so useSelector won't uneccessarily run the function again unless the function input selector is changed

import { createSelector } from 'reselect'

// ? Input selector getting the state of cart 
// ? State passed to selector will reference here
// const selectCart = state => state.cartDropDown;
const selectVisibility = state => state.cartDropDown.hideCart;
const selectList = state => state.cartDropDown.cartItems;

export const selectCartItems = createSelector(
    [selectList], //? Input selector being referenced
    // ? Recieves input selector output as argument
    (cartList) => {
        // console.log(`Select cart selector:`, cartList)
        return cartList
    }
)

export const selectCartItemsCount = createSelector(
    [selectList],
    (selectCartList) => {
        const totalCount = selectCartList.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.quantity
        }, 0)
        // console.log(`Cart items count selcetor:`, totalCount)

        return totalCount
    }
)

export const selectCartTotal = createSelector(
    [selectList],
    (selectCartList) => {
        const totalPrice = selectCartList.reduce((accumulator, currentValue) => {
            return accumulator + (currentValue.quantity * currentValue.price)
        }, 0)
        // console.log(`Cart total Price selcetor:`, totalPrice)

        return totalPrice
    }
)

export const selectCartVisibility = createSelector(
    [selectVisibility],
    (selectCartVisibility) => {
        // console.log(`Cart Visibility selector:`, selectCartVisibility)
        return selectCartVisibility
    }
)

