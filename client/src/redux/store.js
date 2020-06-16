import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleWare from 'redux-saga'
import { persistStore } from 'redux-persist'

import rootReducer from "./root-reducer";
import { rootSaga } from './root-saga/root-saga'

const sagaMiddleWare = createSagaMiddleWare()

const middleWares = [sagaMiddleWare];

// ? env variable accessible by create react app, tells what stage app is in (production or development)
// ? When project is 'npm build' , this variable wwill be production
if (process.env.NODE_ENV === 'development') {
    middleWares.push(logger)
}

// Create a Redux store holding the state of your app (rootReducer in this case)
// Its API is { subscribe, dispatch, getState }
export const store = createStore(rootReducer, applyMiddleware(...middleWares))


// ? RootSaga holds all sagas we want to listen for, same as rootReducer
sagaMiddleWare.run(rootSaga)


export const persistor = persistStore(store)

export default { store, persistor };