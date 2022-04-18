import React from "react";
import "./SideBar.css";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="sideBarWrap">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
                <LineStyleIcon className="sideBarIcon"/>
              Home
            </li>
            <li className="sideBarListItem"Item>
                <EqualizerIcon className="sideBarIcon"/>
              Analytics
            </li>
            <li className="sideBarListItem"Item>
                <TrendingUpIcon className="sideBarIcon"/>
              Sales
            </li>
            
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Menu</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
                <LineStyleIcon className="sideBarIcon"/>
              Product
            </li>
            <li className="sideBarListItem"Item>
                <EqualizerIcon className="sideBarIcon"/>
              Transaction
            </li>
            <li className="sideBarListItem"Item>
                <TrendingUpIcon className="sideBarIcon"/>
              Report
            </li>
            
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notification</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
                <LineStyleIcon className="sideBarIcon"/>
              Mail
            </li>
            <li className="sideBarListItem"Item>
                <EqualizerIcon className="sideBarIcon"/>
              Feedback
            </li>
            <li className="sideBarListItem"Item>
                <TrendingUpIcon className="sideBarIcon"/>
              Message
            </li>
            
          </ul>
        </div>
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
                <LineStyleIcon className="sideBarIcon"/>
              manager
            </li>
            <li className="sideBarListItem"Item>
                <EqualizerIcon className="sideBarIcon"/>
              Analytics
            </li>
            <li className="sideBarListItem"Item>
                <TrendingUpIcon className="sideBarIcon"/>
              Reports
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
