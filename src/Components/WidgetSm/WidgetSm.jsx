import React from "react";
import "./WidgetSm.css";
import { AiFillEye } from "react-icons/ai";
// import "./WidgetSmData";
import data from "./WidgetSmData";
const WidgetSm = () => {
  return (
    <div className="WidgetSm">
      <div className="WidgetSmWrap">
        <h3 className="title">New Join Member</h3>

        {data.map((item) => {
          return (
            <div className="memberData">
              <div className="member">
                <img src={item.img} alt="" />

                <div className="nameData">
                  <p className="name">{item.name}</p>
                  <p className="position">{item.position}</p>
                </div>
                <div className="buttonHold">
                  <AiFillEye className="icon"/>
                  <span>Display</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WidgetSm;
