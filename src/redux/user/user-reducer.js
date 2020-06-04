import UserActionTypes from './user-types'

const initialState = {
    currentUser: null
}

const useReducer = (state = initialState, action) => {
    switch (action.type) {
        
        // ? For either case
        case (UserActionTypes.GOOGLE_SIGN_IN_SUCESS):
        case (UserActionTypes.EMAIL_SIGN_IN_SUCESS):
            return {
                ...state,
                currentUser: action.payload,
                error: null
            }

        case (UserActionTypes.GOOGLE_SIGN_IN_FAILURE):
        case (UserActionTypes.EMAIL_SIGN_IN_FAILURE):
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;

    }
}

export default useReducer;