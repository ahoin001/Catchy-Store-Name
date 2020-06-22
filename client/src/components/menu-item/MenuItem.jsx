import React from 'react';

import { withRouter } from 'react-router-dom'

import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
} from './menu-item-styles';

// import './menu-item.styles.scss'

require('typeface-roboto')

const MenuItem = (props) => {

    return (
        <MenuItemContainer
            size={props.size}
            // ? Go to this route and add it to history, match url gets current url, then i appended the url we are going to
            onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`)}
        >

            {/* 
                Make bg-image it's own div, so on hover it will grow but not 
                overflow, (When overflow hidden is applied)
            */}

            <BackgroundImageContainer
                className="background-image"
                imageUrl={props.imageUrl}
            />

            <ContentContainer>

                <ContentTitle> {props.title.toUpperCase()}</ContentTitle>
                <ContentSubtitle> SHOP NOW </ContentSubtitle>

            </ContentContainer>

        </MenuItemContainer>
    );

};

// ? withRouter returns component with access to match, history, and location
export default withRouter(MenuItem);
