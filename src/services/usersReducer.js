import {registerThunk} from "./users-thunks";

const { createSlice } = require("@reduxjs/toolkit");
const {
    // findAllUsersThunk,
    // findUserByIdThunk,
    // createUserThunk,
    // deleteUserThunk,
     updateUserThunk,
    loginThunk,
    logoutThunk,
    profileThunk,
    // registerThunk,
} = require("../services/users-thunks");

const initialState = {
    users: [],
    loading: false,
    error: null,
    currentUser: null,
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: {
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
            // console.log(state.currentUser)
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [updateUserThunk.fulfilled]:
            (state, action) => {

                state.currentUser = action.payload;
                //console.log(action.payload);
            },
    },
});


export default usersSlice.reducer;
