import { createSlice } from "@reduxjs/toolkit";


export const userSlice = createSlice({
    name = 'user',
    inititalState: {
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: state => {
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export const selectUser = state => state.user.user;
export default userSlice.reducer;
//  incrementByAmount: (state, action) => {
//         state.user += action.payload;
//     },
// export const incrementAsync = amount => dispatch => {
//     setTimeout(() => {
//         dispatch(incremenetByAmount(amount));
//     }, 1000);
// }