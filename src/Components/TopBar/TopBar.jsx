import React from "react";
import "./Topbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
const TopBar = () => {
  return (
    <div className="TopBar">
      <div className="topBarWrap">
        <div className="leftTopBar">
          <span className="logo">Logo</span>
        </div>
        <div className="rightTopBar">
          <div className="topBarIcon">
            <NotificationsIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topBarIcon">
            <LanguageIcon />
            <span className="topIconBag">2</span>
          </div>
          <div className="topBarIcon">
            <SettingsIcon />
          </div>
          <img
            className="topAvatar"
            src="https://i.ibb.co/WpM5yZZ/9.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
