import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/js/bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./ComplexForm.css";
import Sidebar from "./Components/ComplexForm/Sidebar.js";

function Appforcomplexform() {
  return (
    <div className="app">
      {" "}
      <Router>
        <Sidebar></Sidebar>
      </Router>
    </div>
  );
}

export default Appforcomplexform;
