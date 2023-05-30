import React from 'react'
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
  } from "recharts";

function Chart(props) {
    const { history } = props
  return (
    <AreaChart
      width={400}
      height={280}
      data={history}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="priceUsd" stroke="#3f3f3f" fill="#b8b8b8" />
    </AreaChart>
  )
}

export default Chart