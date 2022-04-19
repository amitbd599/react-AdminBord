import React from "react";
import Chart from "../Components/Chart/Chart";
import FeatureInfo from "../Components/FeatureInfo/FeatureInfo";
import WidgetLg from "../Components/WidgetLg/WidgetLg";
import WidgetSm from "../Components/WidgetSm/WidgetSm";
import './Home.css'
const Home = () => {
  return (
    <div className="Home">
      <FeatureInfo/>
      <Chart/>
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
