import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from 'redux-persist'

import rootReducer from "./root-reducer";

const middleWares = [];

// ? env variable accessible by create react app,
if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger)
}

// Create a Redux store holding the state of your app (rootReducer in this case)
// Its API is { subscribe, dispatch, getState }
export const store = createStore(rootReducer, applyMiddleware(...middleWares))

export const persistor = persistStore(store)

export default { store, persistor };