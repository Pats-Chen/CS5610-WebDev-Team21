import * as userService from "./user-service";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const loginThunk = createAsyncThunk("users/login", async (user) => {
    const response = await userService.login(user);
    // console.log(response.data)
    return response.data;
});

export const logoutThunk = createAsyncThunk("users/logout", async () => {
    await userService.logout();
});

export const registerThunk = createAsyncThunk(
    "users/register",
    async (user) => {
        const response = await userService.signup(user);
        return response.data;
    }
);

export const profileThunk = createAsyncThunk("users/profile", async () => {
    const response = await userService.profile();
    // console.log(response.data)
    return response.data;
});