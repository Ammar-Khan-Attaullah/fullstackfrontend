import React, { useState, useEffect } from "react";
import "./Appfullstack.css";
import { Container } from "reactstrap";
import Imessage from "./Components/IMessageAll/IMessage/Imessage";
import Feed from "./Components/Twitter/Feed/Feed";
import Sidebar from "./Components/Twitter/Sidebar/Sidebar";
import Widgets from "./Components/Twitter/Widgets/Widgets";
import Routes from "./routes";
import { ContextWrapper } from "./fullstack-user-context";
function Appfullstack() {
  return (
    <ContextWrapper>
      <Container>
        <h1>Sport's App</h1>

        <div className="content">
          <Routes />
        </div>
      </Container>
    </ContextWrapper>
  );
}

export default Appfullstack;
// mongodb+srv://<username>:<password>@cluster0.t88fd.mongodb.net/<dbname>?retryWrites=true&w=majority
// NasNSMMdLzP4dJvY;
