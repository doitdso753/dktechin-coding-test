import React from 'react';
import PropTypes from 'prop-types';

const JobItem = ({children}) => {
    return (
        <li className="new">
            <div className="title_job">
                <a href="#none" className="link_title">
                    <strong>프론트엔드 개발자<em>FT팀</em></strong>
                </a>
                <span className="bundle_badge">
                    <a href="#none">WEB DEVELOPMENT</a>
                    <a href="#none">REACT</a>
                    <a href="#none">VUE</a>
                    <a href="#none">ES6</a>
                </span>
            </div>
            <div className="desc_job">
                <span className="badge_type">Front-end</span>
                <div className="wrap_txt">
                    <span className="txt_day">Today</span>
                    <span className="txt_location">제주</span>
                </div>
            </div>
        </li>
    )
}

export default JobItem;