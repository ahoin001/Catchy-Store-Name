import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middleWares = [logger];

// Create a Redux store holding the state of your app (rootReducer in this case)
// Its API is { subscribe, dispatch, getState }
const store = createStore(rootReducer, applyMiddleware(...middleWares))

export default store;