import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import RateReviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import "./Sidebar.css";
import SidebarChat from "../SidebarChat/SidebarChat";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>I am The Sidebar</h2>
      <div className="sidebar__header">
        <Avatar className="sidebar__avatar" />
      </div>
      <div className="sidebar__input">
        <SearchIcon />
        <input placeholder="Search" />
      </div>
      <IconButton variant="outlined" className="sidebar__inputButton">
        <RateReviewOutlinedIcon />
      </IconButton>
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
