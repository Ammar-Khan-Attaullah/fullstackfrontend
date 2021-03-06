import React,{useEffect, useState} from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import SidebarChannel from "./SidebarChannel/SidebarChannel";
import SignalCellularAltIcon from "@material-ui/icons/SignalCellularAlt";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import CallIcon from "@material-ui/icons/Call";
import { Avatar } from "@material-ui/core";
import MicIcon from "@material-ui/icons/Mic";
import HeadsetIcon from "@material-ui/icons/Headset";
import SettingsIcon from "@material-ui/icons/Settings";
import { auth } from "../../firebase";

function Sidebar() {
  return (
    <div className="sidebar">
      {" "}
      <h2 className="">Sidebar</h2>
      <h3 className="">I am the sidebar</h3>
      <div className="sidebar__top">
        <h3>Clever Programmer</h3>
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channelsHeader">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          {/* <AddIcon className="sidebar__addChannel"/> */}
        </div>
      </div>
      <div className="sidebar__channelsList">
        <SidebarChannel />
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voiceIcon"
          fontSize="large"
        />
        <div className="sidebar__voiceInfo">
          <h3>Voice Connected</h3>
          <p>Stream</p>
        </div>
        <div className="sidebar__voiceIcons">
          <InfoOutlinedIcon />
          <CallIcon />
        </div>
      </div>
      <div className="sidebar__profile">
        <Avatar src="https://avatar2.githubuserscreenshot.com/u/24712956?s=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4" />
        <div className="sidebar__ProfileInfo">
          <h3>@ssssangha</h3>
          <p>#This is my ID</p>
        </div>
        <div className="sidebar__profileIcons">
          <MicIcon />
          <HeadsetIcon />
          <SettingsIcon />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
