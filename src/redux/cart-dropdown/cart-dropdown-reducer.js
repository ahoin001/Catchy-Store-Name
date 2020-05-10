import cartActionTypes from "./cart-dropdown-types";
// ? Adds items to list and groups similar items
import { addItemToCart } from './cart-util'

const initialState = {
    hideCart: true,
    cartItems: []
}

export default (state = initialState, action) => {
    switch (action.type) {

        case cartActionTypes.TOGGE_CART_DISPLAY:
            return {
                ...state,
                hideCart: !state.hideCart
            }

        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems,
                    action.payload)
            }

        default:
            return state
    }
}
