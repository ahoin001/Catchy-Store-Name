import cartActionTypes from "./cart-dropdown-types";
// ? Adds items to list and groups similar items
import { addItemToCart, removeItemInCheckout } from './cart-util'

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

            case cartActionTypes.CLEAR_CART:
            return {
                ...state,
                cartItems: [],
                hideCart: true
            }

        case cartActionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                // filter out any item that matches id's with itembeing removed
                cartItems: state.cartItems.filter(
                    item => item.id !== action.payload.id
                )
            }

        case cartActionTypes.REMOVE_ITEM_FROM_CHECKOUT:
            return {
                ...state,
                cartItems: removeItemInCheckout(state.cartItems, action.payload)
            }

        default:
            return state
    }
}
