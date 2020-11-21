import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name = 'user',
    inititalState: {
        user: 0,
    },
    reducers: {
        login: (state, action) => {
            state.user += 1;
        }
    },
    logout: state => {
        state.user -= 1;
    },
    incrementByAmount: (state, action) => {
        state.user += action.payload;
    },
});

export const { increment, decrement, incrementByAmount } = userSlice.actions;

export const incrementAsync = amount => dispatch => {
    setTimeout(() => {
        dispatch(incremenetByAmount(amount));
    }, 1000);
}