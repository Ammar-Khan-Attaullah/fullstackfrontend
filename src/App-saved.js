import React, { useState, useEffect } from "react";
import AuthContext from "./Contexts/AuthContext";
import AppContext from "./Contexts/AppContext";
import Home from "./Pages/Home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import logo from "./logo.svg";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    init();
  }, []);
  const [user, setUser] = useState(null);
  const [isInitiated, setIsInitiated] = useState(false);

  const init = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get("/api/auth/init", { params: { token } });
    const { user } = response.data;
    setUser(user);
    setIsInitiated(true);
  };
  return (
    <div>
      {isInitiated && (
        <AuthContext.Provider value={{ user, setUser }}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      )}
      {/* {isInitiated && (
        <AuthContext.Provider value={{ user, setUser, handleLogout }}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/auth/login">
                {!user ? <Login /> : <Redirect to="/" />}
              </Route>
              <Route path="/auth/register">
                {!user ? <Register /> : <Redirect to="/" />}
              </Route>
              <Route path="/category/create">
                {user ? <CreateCategory /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/category/:id">
                <ShowCategory />
              </Route>
              <Route path="/category">
                <BrowseCategories />
              </Route>
              <Route path="/forum/create/:id">
                {user ? <CreateForum /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/forum/:id">
                <ShowForum />
              </Route>
              <Route path="/thread/create/:id">
                {user ? <CreateThread /> : <Redirect to="/auth/login" />}
              </Route>
              <Route path="/thread/:id">
                <ShowThread />
              </Route>
            </Switch>
          </Router>
        </AuthContext.Provider>
      )} */}
    </div>
  );
}

export default App;
