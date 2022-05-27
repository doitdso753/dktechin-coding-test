import React from 'react';
import PropTypes from 'prop-types';

const Footer = () => {
    return (
        <footer className="doc-footer">
            <div className="inner_footer">
                <small>&copy; 2021 dktechin.com</small>
                <div className="area_link">
                    <a target="_blank" href="https://dktechin.com/service/introduce/company">회사소개</a>
                    <a target="_blank" href="https://dktechin.com/service/careers/process">채용절차</a>
                    <a target="_blank" href="https://dktechin.com/service/careers/job">직무소개</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;