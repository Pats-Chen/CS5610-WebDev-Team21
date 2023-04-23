import axios from "axios";

const BASE_URL = "https://cs5610-webdev-server-team21.onrender.com/api";
// const BASE_URL = "http://localhost:4000"
const TRAVEL_API = `${BASE_URL}/api/travel`;
const api = axios.create({
    withCredentials: true
});
export const create_plan = (plan_info) => {
    // return api.post(TRAVEL_API + "/create", plan_info).then
    // (response =>response.data)
    return api.post(TRAVEL_API + "/create", plan_info)
}

export const getPlanById =(pid)=>{
    return api.get(TRAVEL_API +"/findOne/" +pid)

}
export const getLists = (id) =>
    api.get(TRAVEL_API + "/get/" + id)

export const delTravelPlan = (locations_id) => {
    api.delete(TRAVEL_API + "/delete/" + locations_id).then((response) => {
        console.log(response.data);
        return response.data
    })
}

export const getAllPlansOfOneUser = async (uid)=>{
    const response = await api.get(TRAVEL_API +"/findAll/" +uid);
    return response.data
}

export const adminGet = async ()=>{
    const response = await api.get(TRAVEL_API +"/findAll");
    // console.log(response.data);
    return response.data;
}

export const getRecommendation = async ()=>{
    const response = await api.get(TRAVEL_API +"/recommendation");
    // console.log(response.data);
    return response.data;
}


