import UserActionTypes from './user-types'

const initialState = {
    currentUser: null
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {

        // ? For either case
        case (UserActionTypes.SIGN_IN_SUCCESS):
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case (UserActionTypes.SIGN_OUT_SUCCESS):
            return {
                ...state,
                currentUser: null,
                error: null
            }

        case (UserActionTypes.SIGN_IN_FAILURE):
        case (UserActionTypes.SIGN_OUT_FAILURE):
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;

    }
}

export default useReducer;