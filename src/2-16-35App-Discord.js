import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./Pages/Home/Home";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";
import Login from "./Components/Login/Login";
import Chat from "./Pages/Chat/Chat";
import { selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { login, logout } from "./features/userSlice";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  // const user = useSelector(selectUser);
  const userOne = "";
  useEffect(() => {
    console.log("user one");
    console.log(userOne);
    console.log("user");
    // console.log(user);

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );

        //the user i logged in
      } else {
        dispatch(logout());
        //the user is logged out
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {userOne ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
// useEffect(() => {
//   init();
// }, []);
// const [user, setUser] = useState(null);
// const [isInitiated, setIsInitiated] = useState(false);

// const init = async () => {
//   const token = localStorage.getItem("token");
//   const response = await axios.get("/api/auth/init", { params: { token } });
//   const { user } = response.data;
//   setUser(user);
//   setIsInitiated(true);
// };
