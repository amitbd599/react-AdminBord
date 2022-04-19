import React from "react";
import "./Chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
    const data = [
        {
          name: 'Jan',
          Earn: 4000,
          Order: 2400,
          Cancel: 2400,
        },
        {
          name: 'Feb',
          Earn: 3000,
          Order: 1398,
          Cancel: 2210,
        },
        {
          name: 'Mar',
          Earn: 2000,
          Order: 9800,
          Cancel: 2290,
        },
        {
          name: 'Apr',
          Earn: 2780,
          Order: 3908,
          Cancel: 2000,
        },
        {
          name: 'May',
          Earn: 1890,
          Order: 4800,
          Cancel: 2181,
        },
        {
          name: 'June',
          Earn: 2390,
          Order: 3800,
          Cancel: 2500,
        },
        {
          name: 'July',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
        {
          name: 'Aug',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
        {
          name: 'Sep',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
        {
          name: 'Oct',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
        {
          name: 'Nov',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
        {
          name: 'Dec',
          Earn: 3490,
          Order: 4300,
          Cancel: 2100,
        },
      ];
  return (
    <div className="Chart">
      <div className="ChartWrap">
        <h3 className="ChartTitle">Sales Analytics</h3>
        <ResponsiveContainer width="100%" height={300}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Order" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="Earn" stroke="#0E9F6E" />
          <Line type="monotone" dataKey="Cancel" stroke="#0E9F6E" />
        </LineChart>
      </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
