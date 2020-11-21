import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Pages/fullstack/Login";
import Register from "./Pages/fullstack/Register";
import Dashboard from "./Pages/fullstack/Dashboard";
import EventsPage from "./Pages/fullstack/EventsPage";
import TopNav from "./Components/fullstack/TopNave";
import MyRegistrations from "./Pages/fullstack/MyRegistrations/index";

export default function Routes() {
  return (
    <BrowserRouter>
      <TopNav />
      <Switch>
        <Route path="/login" exact component={Login} />{" "}
        <Route path="/myregisterations" exact component={MyRegistrations} />
        <Route path="/register" exact component={Register} />{" "}
        <Route path="/events" component={EventsPage} />{" "}
        <Route path="/" component={Dashboard} />{" "}
      </Switch>{" "}
    </BrowserRouter>
  );
}
