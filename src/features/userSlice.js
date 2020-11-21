import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        },
    },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (state) => state.user;

export default userSlice.reducer;
// reducers: {
//     increament: (state) => {
//         state.value += 1;
//     },
//     decreament: (state) => {
//         state.value -= 1;
//     },
//     increamentByAmount: (state, action) => {
//         state.value += action.payload;
//     },
// },

// export const { increment, decrement, incrementByAmount } = userSlice.actions;

// export const incrementAsync = (amount) => (dispatch) => {
//     setTimeout(() => {
//         dispatch(incrementByAmount(amount));
//     }, 1000);
// };