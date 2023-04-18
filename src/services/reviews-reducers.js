import { createSlice } from "@reduxjs/toolkit";
import {findReviewThunk, findReviewByPlanIdThunk, createReviewThunk, deleteReviewThunk} from "./reviews-thunks";

const initialState = {
    reviews: [],
    loading: false
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewThunk.rejected]:
            (state) => {
                state.loading = false
            },
        [deleteReviewThunk().fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.comments
                    .filter(c => c._id !== payload)
            },
        [createReviewThunk().fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [findReviewByPlanIdThunk.fulfilled]:
            (state, { payload }) => {
                console.log("payload", payload);
                state.loading = false
                state.reviews = payload
            },

    },

    reducers: {
        //...
    }

});

export default reviewsSlice.reducer