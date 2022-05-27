import React from 'react';
import PropTypes from 'prop-types';
import JobItem from "./JobItem";

const JobResultContainer = () => {
    return (
        <main className="doc-main">
            <section className="inner-main">
                <h2 className="screen_out">채용 데모 페이지 본문</h2>
                <div className="main-content">
                    <article id="mainContent" className="content-article">
                        <h3 className="screen_out">채용 목록</h3>
                        <ul className="list_job">
                            <JobItem />
                        </ul>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default JobResultContainer;