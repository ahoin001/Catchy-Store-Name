import { UserActionTypes } from './user-types'

// ? Action Creator function to have reusable action object for certain types
// ? In this case I provide a user as payload for the action

export const setCurrentUser = (user) => {
    return {
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}
