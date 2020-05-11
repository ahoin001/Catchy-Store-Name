// ! Reducers should not mutate state, but return a value of mutated state instead

// Will hold all reducers we imported, to avoid one massive file
import { combineReducers } from "redux";

import userReducer from './user/user-reducer'
import cartDropDownReducer from './cart-dropdown/cart-dropdown-reducer'

// * REMEMBER WHEN STATE IS MODIFIED IN THE REDUCERS THE MODIFIED STATE IS RETURNED TO THE STORE
// * NEVER MODIFY STATE DIRECTLY
export default combineReducers(
    {
        user: userReducer,
        cartDropDown: cartDropDownReducer
    }
)