import React from 'react'

import './search-box.styles.css';

export const SearchBox = ({placeholder, handleChange}) => (
    <input classNmae = 'search'
    type = 'search' 
    placeholder = {placeholder}
    onChange = {handleChange}
    />  
)