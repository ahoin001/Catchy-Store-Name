import React from 'react';

const CustomButton = (props) => {
   
    return (
        
        <button className={`${props.isGoogleBtn ? 'google-btn' : ''} custom-bttn`}>
            {props.children}
        </button>
    
    );

};

export default CustomButton;