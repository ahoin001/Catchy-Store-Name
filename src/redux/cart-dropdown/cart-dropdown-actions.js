import cartActionTypes from './cart-dropdown-types'

export const toggleCartDisplay = () => ({
    type: cartActionTypes.TOGGE_CART_DISPLAY
})

export const addCartItem = (item) => ({
    type: cartActionTypes.ADD_ITEM,
    payload: item
})
