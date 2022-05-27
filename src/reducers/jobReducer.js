import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {api} from "../api";

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
                state.jobList = payload.data.jobList;
                state.jobCnt = payload.data.jobList.length;
                state.isLoading = false;
            }
            else {
                state.isLoading = true;
            }
        })
    },
})

// Action creators are generated for each case reducer function
export const { searchJobList } = jobReducer.actions;

export default jobReducer.reducer;