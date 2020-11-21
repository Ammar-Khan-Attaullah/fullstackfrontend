import React, { useState, useEffect } from "react";
import AuthContext from "./Contexts/AuthContext";
import AppContext from "./Contexts/AppContext";
import Home from "./Pages/Home/Home";
import Sidebar from "./Shared/Sidebar/Sidebar";
import Header from "./Shared/Header/Header";
import Footer from "./Shared/Footer/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

function App() {
  return <div className="app"> ok </div>;
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
}

export default App;
