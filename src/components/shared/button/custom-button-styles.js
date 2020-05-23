import styled, { css } from 'styled-components'


const customButtonStyles = css`  
background-color: black;
color: white;
border: none;

&:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }

`

const invertedButtonStyles = css`  
background-color: white;
color: black;
border: 1px solid black;

&:hover {
background-color: black;
color: white;
border: none;
}
`

const googleSignInStyles = css`  
    background-color: #4285f4;
    color: white;
    &:hover {
      background-color: #357ae8;
      border: none;
    }
    `

// ? props passed to styledcomponent automatically passed
const getButtonStyles = (props) => {
  if (props.googleSignIn) {
    return googleSignInStyles
  }

  return props.inverted ? invertedButtonStyles : customButtonStyles
}


export const CustomButtonContainer = styled.button`
    height: 50px;
    width: auto;
    border-radius: 0;
    border: none;
    min-width: 165px;
  
    display: flex;
    justify-content: center;
  
    background-color: black;
    color: white;
  
    line-height: 50px;
    letter-spacing: 0.5px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: "Open Sans Condensed";
    font-weight: bolder;
  
    cursor: pointer;
  
    ${getButtonStyles}

  
  `