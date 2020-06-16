// ? Selectors for getting slices of state
// ? CreateSelector makes memoized selectors
import { createSelector } from 'reselect'

// ? Input selector getting the state of cart 
// ? State passed tp selector will reference here
const selectCurrentUser = state => state.user;

export const selectUserStatus = createSelector(
    [selectCurrentUser], 
    (selectCurrentUser) => {
        // console.log(`User Status selector:`,selectCurrentUser.currentUser)
        return selectCurrentUser.currentUser
    }
)
