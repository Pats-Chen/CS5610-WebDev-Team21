import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./reviews-service.js"

export const createReviewThunk = createAsyncThunk(
    'reviews/createReviews', async (r) => {
        const review =  await service.createReview(r)
        return review;
    }
)

export const findReviewThunk = createAsyncThunk(
    'reviews/findReviews', async (_id) => {
        const review =  await service.findReview(_id)
        return review;
    }
)

export const findReviewByPlanIdThunk = createAsyncThunk(
    'reviews/findAllReviewByPlanId', async (_id) => {
        console.log("_id", _id);
        const reviews =  await service.findReviewsByPlanId(_id)
        return reviews;
    }
)

export const deleteReviewThunk = createAsyncThunk(
    'review/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId
    })