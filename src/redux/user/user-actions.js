import UserActionTypes from './user-types'

// ? Action Creator functions to have reusable action objects format for different action types

export const checkUserSession = () => {
    return {
        type: UserActionTypes.CHECK_USER_SESSION,
    }
}

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

export const signUpStart = (userAuthData) => {
    return {
        type: UserActionTypes.SIGN_UP_START,
        payload: userAuthData
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

export const signOutFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_OUT_FAILURE,
        payload: error
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

export const signUpSuccess = ({ user, additionalData }) => {
    return {
        type: UserActionTypes.SIGN_UP_SUCCESS,
        payload: { user, additionalData }
    }
}

export const signUpFailure = (error) => {
    return {
        type: UserActionTypes.SIGN_UP_FAILURE,
        payload: error
    }
}




