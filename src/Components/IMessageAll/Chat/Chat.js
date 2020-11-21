import React, { useState } from "react";
import "./Chat.css";
import MicNoneIcon from "@material-ui/icons/MicNone";
import { IconButton } from "@material-ui/core";
function Chat() {
  const [message, setMessage] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    sendMessage("");
    console.log("submit");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
          To: <span className="chat__name">Channel name</span>
        </h4>
        <strong>Details</strong>
      </div>
      {/* chat header */}
      {/* chat messages */}
      <div className="chat__messages">
        <h2>I am a message</h2>
      </div>
      {/* chat input */}
      <div className="chat__input">
        <form>
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="iMessage"
            type="text"
          />
          <button onClick={sendMessage}>Send Message</button>
        </form>
        <IconButton>
          <MicNoneIcon className="chat__mic" />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
