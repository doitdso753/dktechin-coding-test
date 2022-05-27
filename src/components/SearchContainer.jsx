import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from "./SearchBar";

const SearchContainer = () => {
    return (
        <div className="container-search">
            <div className="sub_tit">
                <strong>DKTechin 구인 현황</strong>
                <SearchBar />
                <p>검색 결과 <em>3</em>건</p>
            </div>
        </div>
    )
}

export default SearchContainer;