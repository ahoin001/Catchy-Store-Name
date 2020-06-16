import React from 'react';
import { useSelector } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectStoreSections } from '../../redux/directory/directory-selectors'
import MenuItem from '../menu-item/MenuItem';

import './directory.styles.scss'

const Directory = () => {

    // ? Structured selector makes it easier to add and use multiple selectors
    const structuredSelector = createStructuredSelector({
        departments: (state) => selectStoreSections(state)
    })

    const { departments } = useSelector(structuredSelector);

    const menuItems = departments.map(({ id, ...departmentProps }) => {

        // ? ES6 trick: props is an object, so shorthand syntax where key and value have same name is possible
        // ? Ex: { title: "variableNamedtitle" } can be { title }
        // ? Used here to shorthand passing props

        return <MenuItem
            key={id}
            {...departmentProps}
        />

    })

    return (
        <div className="directory-menu">
            {menuItems}
        </div>
    );


};

export default Directory;