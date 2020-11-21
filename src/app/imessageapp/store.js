import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../features/imessagefeatures/userSlice";
// import appReducer from "../features/appSlice";
export default configureStore({
    reducer: {
        user: userReducer,
        // app: appReducer,
    },
});