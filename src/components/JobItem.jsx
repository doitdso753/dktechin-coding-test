import React from 'react';
import PropTypes from 'prop-types';

const JobItem = ({ job: { badgeType, title, type, keywords, job, textDay, location } }) => {
    return (
        <li className={badgeType}>
            <div className="title_job">
                <a href="#none" className="link_title">
                    <strong>{title}<em>{type}</em></strong>
                </a>
                <span className="bundle_badge">
                    {keywords.map((keyword, idx) => (<a key={idx} href="#none">{keyword}</a>))}
                </span>
            </div>
            <div className="desc_job">
                <span className="badge_type">{job}</span>
                <div className="wrap_txt">
                    <span className="txt_day">{textDay}</span>
                    <span className="txt_location">{location}</span>
                </div>
            </div>
        </li>
    )
}

export default JobItem;