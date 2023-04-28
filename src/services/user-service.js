import axios from "axios";

// const BASE_URL = "https://cs5610-webdev-server-team21.onrender.com";
const BASE_URL = "http://localhost:4000"
const USER_API = `${BASE_URL}/api/users`;
const SECURITY_API = `${BASE_URL}/api/auth`;

// creates an axios instance configured to include cookie headers
// by setting the withCredentials property to true
const api = axios.create({
    withCredentials: true
});

export const signup = (user) =>
    api.post(`${SECURITY_API}/signup`, user)
        .then(response => response.data);


export const login = (user) =>{
    return api.post(`${SECURITY_API}/login`, user);
};

export const logout = () =>
    api.post(`${SECURITY_API}/logout`)
        .then(response => response.data);

export const profile = () =>{
    return api.post(`${SECURITY_API}/profile`);
};
// api.post(`${SECURITY_API}/profile`)
//     .then(response => response.data);

export const updateProfile = (uid, data) =>
    api.put(`${USER_API}/${uid}`, data)


export const updateUser = async (user) => {
    const response = await axios.put(`${USER_API}/${user.uid}`, user)
    return response.data
}
export const getUserProfile = async (uid) => {
    // api.get(`${USER_API}/${uid}`)
    //     .then(res => res.data)
    const response = await axios.get(`${USER_API}/${uid}`);
    return response.data
}