import React from 'react';

import { CustomButtonContainer } from './custom-button-styles'

import './custom-button.scss'

const CustomButton = (props) => {

    return (

        // ? ...props in case inverted is given
        <CustomButtonContainer {...props} onClick={props.onClick}>
            {props.children}
        </CustomButtonContainer>

    );

};

export default CustomButton;