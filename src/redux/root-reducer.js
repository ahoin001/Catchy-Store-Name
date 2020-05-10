// ! Reducers should not mutate state, but return a value of mutated state instead

// Will hold all reducers we imported, to avoid one massive file
import { combineReducers } from "redux";

import userReducer from './user/user-reducer'
import cartDropDownReducer from './cart-dropdown/cart-dropdown-reducer'


export default combineReducers(
    {
        user: userReducer,
        cartDropDown: cartDropDownReducer
    }
)