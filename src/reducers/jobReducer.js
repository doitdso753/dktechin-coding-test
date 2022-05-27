import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {api} from "../api";
import moment from "moment";

const processJobList = (jobs) => {
    const now = moment();

    for (const job of jobs) {
        let diffDay = now.diff(moment(job.createdAt), "days");
        job.diffDay = diffDay;
        job.badgeType = diffDay < 2 ? 'new' : '';

        switch (diffDay) {
            case 0:
                job.textDay = 'Today';
                break;
            case 1:
            case 2:
                job.textDay = `${diffDay} days ago`;
                break;
            default:
                job.textDay = moment(job.createdAt).format("YYYY.MM.DD");
                break;

        }
    }

    return jobs;
}

const sortList = (jobs, sort = 'LATEST') => {
    // sort: ORDERED, LATEST
    return jobs.sort((a, b) =>
        sort === 'LATEST'
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : new Date(a.createdAt) - new Date(b.createdAt)
    );
}

export const fetchJobList = createAsyncThunk(
    'jobs',
    async (a, thunkAPI) => {
        try {
            const response = await api.get('/jobs');
            return {
                status: response.status,
                data: response.data
            } ;
        }
        catch (e) {
            return {
                status: e.status,
                data: [],
            } ;
        }
    }
)

export const jobReducer = createSlice({
    name: 'jobs',
    initialState: {
        isLoading : true,
        searchText: '',
        jobList: [],
        jobCnt: 0,
    },
    reducers: {
        searchJobList: (state, action) => {
            console.log(state, action);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobList.fulfilled, (state, { payload }) => {
            if (payload.status === 200) {
                let jobList = processJobList(payload.data.jobList);
                jobList = sortList(jobList);
                state.jobList = jobList;
                state.jobCnt = jobList.length;
                state.isLoading = false;
            }
            else {
                state.isLoading = true;
            }
        })
    },
});

// Action creators are generated for each case reducer function
export const { searchJobList } = jobReducer.actions;

export default jobReducer.reducer;