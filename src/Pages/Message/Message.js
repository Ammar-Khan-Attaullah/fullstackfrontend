import React from "react";
import "./Message.css";
import { Avatar } from "@material-ui/core";

function Message() {
  return (
    <div className="message">
      <Avatar />
      <div className="message_info">
        <h4>
          ssssangha
          <span>This is a timestamp</span>
        </h4>
        <p>This is a messsage</p>
      </div>
    </div>
  );
}

export default Message;
