import React from 'react';

import './custom-button.scss'

const CustomButton = (props) => {
   console.log(`Button props: `,props)
    return (
        
        <button className={`${props.isGoogleBtn ? 'google-btn' : ''} custom-bttn`}>
            {props.children}
        </button>
    
    );

};

export default CustomButton;