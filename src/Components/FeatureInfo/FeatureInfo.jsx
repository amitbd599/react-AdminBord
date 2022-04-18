import React from "react";
import "./FeatureInfo.css";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import StreetviewIcon from "@mui/icons-material/Streetview";
export default function FeatureInfo() {
  return (
    <div className="FeatureInfo">
      <div className="FeatureInfoItem">
        <h2 className="FeatureInfoTitle">Total Post :</h2>
        <div className="FeatureInfoContainer">
          <p className="FeatureInfoTotalPost">
            {" "}
            <HourglassBottomIcon className="FeatureInfoIcon" />
            Total post are include : 16
          </p>
          <p className="FeatureInfoTotalVisit">
            {" "}
            <StreetviewIcon className="FeatureInfoIcon" />
            Total post view : 16163
          </p>
          <p className="FeatureInfoTotalVisit_LastPost">
            {" "}
            <ContentPasteIcon className="FeatureInfoIcon" />
            Last Post :
          </p>
          <p className="FeatureInfoTotalLastPosted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugit illo placeat incidunt perferendis pariatur vel molestiae
            laudantium exercitationem quas!
          </p>
        </div>
      </div>
      <div className="FeatureInfoItem">
        <h2 className="FeatureInfoTitle">Total Comment :</h2>
        <div className="FeatureInfoContainer">
          <p className="FeatureInfoTotalPost">
            {" "}
            <HourglassBottomIcon className="FeatureInfoIcon" />
            Total Comment are include : 639
          </p>
          <p className="FeatureInfoTotalVisit">
            {" "}
            <StreetviewIcon className="FeatureInfoIcon" />
            Total Comment reply : 163
          </p>
          <p className="FeatureInfoTotalVisit_LastPost">
            {" "}
            <ContentPasteIcon className="FeatureInfoIcon" />
            Last Comment :
          </p>
          <p className="FeatureInfoTotalLastPosted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugit illo placeat incidunt perferendis pariatur vel molestiae
            laudantium exercitationem quas!
          </p>
        </div>
      </div>
      <div className="FeatureInfoItem">
        <h2 className="FeatureInfoTitle">Total Comment :</h2>
        <div className="FeatureInfoContainer">
          <p className="FeatureInfoTotalPost">
            {" "}
            <HourglassBottomIcon className="FeatureInfoIcon" />
            Total Comment are include : 639
          </p>
          <p className="FeatureInfoTotalVisit">
            {" "}
            <StreetviewIcon className="FeatureInfoIcon" />
            Total Comment reply : 163
          </p>
          <p className="FeatureInfoTotalVisit_LastPost">
            {" "}
            <ContentPasteIcon className="FeatureInfoIcon" />
            Last Comment :
          </p>
          <p className="FeatureInfoTotalLastPosted">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            fugit illo placeat incidunt perferendis pariatur vel molestiae
            laudantium exercitationem quas!
          </p>
        </div>
      </div>
    </div>

    
  );
}
