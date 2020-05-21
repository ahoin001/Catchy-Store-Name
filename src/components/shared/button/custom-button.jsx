import React from 'react';

import {CustomButtonContainer} from './custom-button-styles'

// import './custom-button.scss'

const CustomButton = (props) => {

    return (

        <CustomButtonContainer 
        className={`custom-bttn ${props.inverted ? 'inverted' : ''} ${props.isGoogleBtn ? 'google-btn' : ''} `}
        onClick={props.onClick}
        >
            {props.children}
        </CustomButtonContainer>

    );

};

export default CustomButton;