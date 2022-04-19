import React from "react";
import "./WidgetLg.css";
import data from "./WidgetData";
const WidgetLg = () => {
  return (
    <div className="WidgetLg">
      <div className="WidgetLgWrap">
        <h3 className="WidgetLgWrapTitle">Latest Transaction</h3>
        <div className="WidgetLgWrapData">
          <table>
            <tr className="WidgetLgWrapTr">
              <th className="WidgetLgWrapTh">Customer</th>
              <th className="WidgetLgWrapTh">Date</th>
              <th className="WidgetLgWrapTh">Amount</th>
              <th className="WidgetLgWrapTh">Status</th>
            </tr>
            {data.map((item) => {
              return (
                <tr className="WidgetLgWrapTr">
                  <td className="WidgetLgWrapUser">
                    <img className="WidgetLgWrapImg" src={item.img} alt="" />
                    <span>{item.name}</span>
                  </td>
                  <td className="WidgetLgWrapDate">2 jan 2022</td>
                  <td className="WidgetLgWrapAmount">$ 132</td>
                  <td className="WidgetLgWrapStatus">
                    <span className={item.status}>{item.status}</span>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default WidgetLg;
