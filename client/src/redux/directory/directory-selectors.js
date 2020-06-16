// ? Selectors for getting slices of state
// ? CreateSelector makes memoized selectors
import { createSelector } from 'reselect'

// ? Input selector getting the state of cart 
// ? State passed tp selector will reference here
const selectSections = state => state.directory.sections;

export const selectStoreSections = createSelector(
    [selectSections], 
    (selectSections) => {
        console.log(`Select sections selector:`,selectSections)
        return selectSections
    }
)
