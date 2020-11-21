import React, { useState, useEffect } from "react";
import "./App.css";
import "./Apptwitter.css";

import Imessage from "./Components/IMessageAll/IMessage/Imessage";
import Feed from "./Components/Twitter/Feed/Feed";
import Sidebar from "./Components/Twitter/Sidebar/Sidebar";
import Widgets from "./Components/Twitter/Widgets/Widgets";

function Apptwitter() {
  return (
    <div className="app">
      {/* Twitter */}
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
}

export default Apptwitter;
