import React from 'react';
import PropTypes from 'prop-types';

import SearchContainer from "./SearchContainer";
import JobResultContainer from "./JobResultContainer";

const Main = () => {
    return (
        <>
            <SearchContainer />
            <JobResultContainer />
        </>
    )
}

export default Main;