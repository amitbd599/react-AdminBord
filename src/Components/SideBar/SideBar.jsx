import React from "react";
import "./SideBar.css";
import { AiFillHome,AiFillSetting,AiOutlineArrowRight } from "react-icons/ai";
import { BsFileEarmarkPost } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { MdPermMedia, MdRestorePage,MdAddComment,MdNotificationsActive,MdSms } from "react-icons/md";
import { FaUserAlt,FaTools } from "react-icons/fa";
const SideBar = () => {
  return (
    <div className="SideBar">
      <div className="sideBarWrap">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem active">
                <AiFillHome className="sideBarIcon"/>
              Home
            </li>
            <li className="sideBarListItem"Item>
                <BsFileEarmarkPost className="sideBarIcon"/>
              Post +

              {/* DropDown List */}

              <ul className="dropDownItems">
                <li className="dropDownItem">All Post</li>
                <li className="dropDownItem">Add New</li>
                <li className="dropDownItem">Tag</li>
                <li className="dropDownItem">Category</li>
              </ul>
            </li>
            <li className="sideBarListItem"Item>
                <MdPermMedia className="sideBarIcon"/>
              Media
            </li>
            <li className="sideBarListItem"Item>
                <BiCategory className="sideBarIcon"/>
              Category   +
              {/* DropDown List */}

              <ul className="dropDownItems">
                <li className="dropDownItem">All Category</li>
                <li className="dropDownItem">Add New Category</li>
                <li className="dropDownItem">Tag</li>
                <li className="dropDownItem">Category List</li>
              </ul>
            </li>
            <li className="sideBarListItem"Item>
                <MdRestorePage className="sideBarIcon"/>
              Pages
            </li>
            <li className="sideBarListItem"Item>
                <MdNotificationsActive className="sideBarIcon"/>
              Notification
            </li>
            <li className="sideBarListItem"Item>
                <MdSms className="sideBarIcon"/>
              Inbox
            </li>
            <li className="sideBarListItem"Item>
                <FaTools className="sideBarIcon"/>
              Tools
            </li>
            <li className="sideBarListItem"Item>
                <MdAddComment className="sideBarIcon"/>
              Comments
            </li>
            <li className="sideBarListItem"Item>
                <FaUserAlt className="sideBarIcon"/>
              Users
            </li>
            <li className="sideBarListItem"Item>
                <AiFillSetting className="sideBarIcon"/>
              Setting
              
            </li>
            
           
            
          </ul>
        </div>
        
      </div>
    </div>
  );
};

export default SideBar;
