// ! Reducers should not mutate state, but return a value of mutated state instead

// Will hold all reducers we imported, to avoid one massive file
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

// Gets local storage from browser
import storage from "redux-persist/lib/storage";

import userReducer from './user/user-reducer'
import cartDropDownReducer from './cart-dropdown/cart-dropdown-reducer'



const persistConfig = {
    key: 'root',
    storage,

    // Contains name of reducers to store
    whiteList: ['cartDropDown']
}


// * WHEN STATE IS MODIFIED IN THE REDUCERS THE MODIFIED STATE IS RETURNED TO THE STORE
// * NEVER MODIFY STATE DIRECTLY
const rootReducer = combineReducers(
    {
        user: userReducer,
        cartDropDown: cartDropDownReducer
    }
)

// ? Modified version of root reducer with persistance capabilities
export default persistReducer(persistConfig, rootReducer)