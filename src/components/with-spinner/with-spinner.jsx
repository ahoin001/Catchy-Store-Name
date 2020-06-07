import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './with-spinner-styles'

// ? HOC that will display loading screen if the component is not ready to be rendered

// ? WithSpinner takes a component I want to wrap, then passes it to another component that will wrap and use it in someway
const WithSpinner = (WrappedComponent) => {

    // ? Deconstructs props from passed component
    const Spinner = ({ isLoading, ...otherProps }) => {

        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        )
            :
            (
                <WrappedComponent {...otherProps} />
            )

    };

    return Spinner

}

export default WithSpinner;