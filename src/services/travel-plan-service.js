import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL;
 //const BASE_URL = "http://localhost:4000"
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

export const delTravelPlain = (locations_id) =>
    api.get(TRAVEL_API + "/del", locations_id)