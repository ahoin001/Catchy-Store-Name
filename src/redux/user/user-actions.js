import UserActionTypes from './user-types'

// ? Action Creator functions to have reusable action objects format for different action types
// ? In this case I provide a user as payload for the action

export const googleSignInStart = () => {
    return {
        type: UserActionTypes.GOOGLE_SIGN_IN_START
    }
}

export const emailSignInStart = (emailAndPassword) => {
    return {
        type: UserActionTypes.EMAIL_SIGN_IN_START,
        payload: emailAndPassword
    }
}

export const signOutStart = () => {
    return {
        type: UserActionTypes.SIGN_OUT_START,
    }
}

export const signOutSuccess = () => {
    return {
        type: UserActionTypes.SIGN_OUT_SUCCESS,
    }
}

export const signInSuccess = (user) => {
    return {
        type: UserActionTypes.SIGN_IN_SUCCESS,
        payload: user
    }
}

export const signInFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_IN_FAILURE,
        payload: error
    }
}

export const signOutFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error
    }
}



export const checkUserSession = () => {
    return {
        type: UserActionTypes.CHECK_USER_SESSION,
    }
}
