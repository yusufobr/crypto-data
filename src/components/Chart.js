/* eslint-disable */
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

function Chart(props) {
  const { history } = props;
  return (
    <ResponsiveContainer width="95%" height={300}>
    <AreaChart
      data={history}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="USD" stroke="black" fill="#1dd79c" />
    </AreaChart>
    </ResponsiveContainer>
  );
}

export default Chart;
