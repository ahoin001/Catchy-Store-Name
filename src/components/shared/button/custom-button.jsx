import React from 'react';

import './custom-button.scss'

const CustomButton = (props) => {

    return (

        <button 
        className={`custom-bttn ${props.inverted ? 'inverted' : ''} ${props.isGoogleBtn ? 'google-btn' : ''} `}
        onClick={props.onClick}
        >
            {props.children}
        </button>

    );

};

export default CustomButton;