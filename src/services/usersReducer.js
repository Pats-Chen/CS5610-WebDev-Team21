const { createSlice } = require("@reduxjs/toolkit");
const {
    // findAllUsersThunk,
    // findUserByIdThunk,
    // createUserThunk,
    // deleteUserThunk,
    // updateUserThunk,
    loginThunk,
    logoutThunk,
    // profileThunk,
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
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },
    },
});

export default usersSlice.reducer;
