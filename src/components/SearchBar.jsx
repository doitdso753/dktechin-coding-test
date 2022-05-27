import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({children}) => {
    return (
        <div className="wrap_search">
            <div className="bundle_inp">
                <input type="text" /><button type="button"><span className="ir_pm">검색</span></button>
            </div>
        </div>
    )
}

export default SearchBar;