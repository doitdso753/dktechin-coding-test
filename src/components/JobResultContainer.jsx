import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { fetchJobList } from '../reducers/jobReducer';
import JobItem from "./JobItem";

const JobResultContainer = () => {
    const dispatch = useDispatch();
    const { jobList, isLoading } = useSelector(state => state.jobs);

    useEffect(() => {
        dispatch(fetchJobList());
    }, [dispatch]);

    return (
        <main className="doc-main">
            <section className="inner-main">
                <h2 className="screen_out">채용 데모 페이지 본문</h2>
                <div className="main-content">
                    <article id="mainContent" className="content-article">
                        <h3 className="screen_out">채용 목록</h3>
                        <ul className="list_job">
                            {!isLoading ?
                                jobList.map((job, idx) => (<JobItem key={idx} job={job} />))
                                : <div>Loading...</div>
                            }
                        </ul>
                    </article>
                </div>
            </section>
        </main>
    )
}

export default JobResultContainer;