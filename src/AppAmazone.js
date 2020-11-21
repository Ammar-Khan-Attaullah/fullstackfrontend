import React, { useState, useEffect } from "react";
import "./App.css";
import Imessage from "./Components/IMessageAll/IMessage/Imessage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Amazone/Home/Home";
import Header from "./Components/Amazone/Header/Header";
import Login from "./Pages/Amazone/Login/Login";
import { auth } from "./AmazoneFirebase";
import { useStateValue } from "./Contexts/Amazone/StateProvide";
import Checkout from "./Components/Amazone/Checkout/Checkout";

function AppAmazone() {
  const [{ basket }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/Checkout">
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>{" "}
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

export default AppAmazone;
