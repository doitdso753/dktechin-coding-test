import React from 'react';
import PropTypes from 'prop-types';
import SearchBar from "./SearchBar";
import {useSelector} from "react-redux";

const SearchContainer = () => {
    const { jobCnt } = useSelector(state => state.jobs);
    console.log(jobCnt);

    return (
        <div className="container-search">
            <div className="sub_tit">
                <strong>DKTechin 구인 현황</strong>
                <SearchBar />
                <p>검색 결과 <em>{jobCnt}</em>건</p>
            </div>
        </div>
    )
}

export default SearchContainer;