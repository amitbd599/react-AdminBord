import React from "react";
import "./FeatureInfo.css";
import {
  MdOutlineContentCopy,
  MdOutlineProductionQuantityLimits,
  MdFreeCancellation,
} from "react-icons/md";
import { BiDollar } from "react-icons/bi";
export default function FeatureInfo() {
  return (
    <div className="FeatureInfoMain">
      <div className="FeatureInfo">
        <div className="FeatureInfoItem">
          <span>
            <MdOutlineContentCopy className="FeatureInfoItem_icon" />
          </span>
          <h3 className="FeatureInfoItem_title">Today Earn</h3>
          <h2 className="FeatureInfoItem_price">$ 360</h2>
        </div>
        <div className="FeatureInfoItem">
          <span>
            <BiDollar className="FeatureInfoItem_icon" />
          </span>
          <h3 className="FeatureInfoItem_title">Total Earn</h3>
          <h2>$ 25,660</h2>
        </div>
        <div className="FeatureInfoItem">
          <span>
            <MdOutlineProductionQuantityLimits className="FeatureInfoItem_icon" />
          </span>
          <h3 className="FeatureInfoItem_title">Total Order</h3>
          <h2>360</h2>
        </div>
        <div className="FeatureInfoItem">
          <span>
            <MdFreeCancellation className="FeatureInfoItem_icon" />
          </span>
          <h3 className="FeatureInfoItem_title">Order Cancel</h3>
          <h2>29</h2>
        </div>
      </div>

      {/* Other option */}
    </div>
  );
}
