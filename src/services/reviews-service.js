import axios from 'axios';

const REVIEWS_API = 'http://localhost:4000/api/reviews'

export const createReview = async (comment) => {
    const response = await axios.post(`${REVIEWS_API}`, comment)
    return response.data;
}

export const findReview = async (_id) => {
    const response = await axios.get(`${REVIEWS_API}/${_id}`); // by review ID
    const reviews = response.data;
    return reviews;
}

export const findReviewsByPlanId = async (_id) => {
    const response = await axios.get(`${REVIEWS_API}/plan/${_id}`);
    const reviews = response.data;
    return reviews;
}


export const findReviewsByAuthor = async (_id) => {
    const response = await axios.get(`${REVIEWS_API}/author/${_id}`);
    const reviews = response.data;
    return reviews;
}

export const deleteReview = async (rid) => {
    const response = await axios
        .delete(`${REVIEWS_API}/${rid}`)
    // console.log(response)
    return response.data
}