import React from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOption Icon={HomeIcon} text="Home" active={true} />
      <SidebarOption Icon={SearchIcon} text="Explore" active={true} />
      <SidebarOption
        Icon={NotificationsNoneIcon}
        text="Notifications"
        active={true}
      />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" active={true} />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" active={true} />
      <SidebarOption Icon={ListAltIcon} text="Lists" active={true} />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" active={true} />
      <SidebarOption Icon={MoreHorizIcon} text="More" active={true} />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
