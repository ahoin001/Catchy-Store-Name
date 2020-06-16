import React from 'react';

import { withRouter } from 'react-router-dom'

import './menu-item.styles.scss'
require('typeface-roboto')


const MenuItem = (props) => {

    return (
        <div 
        className={`${props.size} menu-item`}
        // ? Go to this route and add it to history, match url gets current url, then i appended the url we are going to
        onClick={() => props.history.push(`${props.match.url}${props.linkUrl}`) }
        >

            {/* 
                Make bg-image it's own div, so on hover it will grow but not 
                overflow, (When overflow hidden is applied)
            */}
            
            <div
                className="background-image"
                style={{ backgroundImage: `url(${props.imageUrl})` }}
            >

            </div>

            <div className="content">

                <h1 className="title"> {props.title.toUpperCase()}</h1>
                <span className="subtitle"> SHOP NOW </span>

            </div>

        </div>
    );

};

// ? withRouter returns component with access to match, history, and location
export default withRouter(MenuItem);
