import React from 'react';

import './custom-button.scss'

const CustomButton = (props) => {
    // console.log(`Button props: `, props)
    return (

        <button className={`custom-bttn ${props.inverted ? 'inverted' : ''} ${props.isGoogleBtn ? 'google-btn' : ''} `}>
            {props.children}
        </button>

    );

};

export default CustomButton;