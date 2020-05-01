import React from 'react';
import './forminput.scss';

// ? Destrcuct values and object from props object
const FormInput = ({ handleChange, label, ...otherProps }) => {

    console.log({ otherProps })

    return (
        <div className={`group $`}>

            {/*
                https://www.carlrippon.com/writing-concise-react-components-with-destructure-assignment-and-spread/
                Passing props with spread operator trick (Check your notes) 
                EX// {type:email, name:email} -> {...otherProps} -><input onChange={handleChange} 

                {...{type: 'email', name:'email'}} />
            */}

            <input className='form-input' onChange={handleChange} {...otherProps} />

            {
                label ? (
                    <label
                        className={`${
                            otherProps.value.length ? 'shrink' : ''
                            } form-input-label`}
                    >

                        {label}

                    </label>

                ) : null
            }

        </div>
    );
};

export default FormInput;