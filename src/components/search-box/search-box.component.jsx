import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => ( // questo è un 'Functional Component' !!!
    <input
        className='search'
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
)