import cartActionTypes from './cart-dropdown-types'

export const toggleCartDisplay = () => ({
    type: cartActionTypes.TOGGE_CART_DISPLAY
})

export const addCartItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})

export const removeCartItem = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})

export const removeCartItemAtChekout = (item) => ({
    type: cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT,
    payload: item
})

export const clearCart = () => ({
    type: cartActionTypes.CLEAR_CART
})
