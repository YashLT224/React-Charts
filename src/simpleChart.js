import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const data = [
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400, week: "Week 1" ,year:'1year'},
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210, week: "Week 7" ,year:'3year'},
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290, week: "Week 3",year:'1year' },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000, week: "Week 1",year:'2year'},
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181, week: "Week 5" ,year:'1year'},
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500, week: "Week 6",year:'2year'},
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100, week: "Week 7",year:'3year'},
];


const renderTooltip = (props) => {
    if (props.active) {
      return (
        <div >
          <div className="tool-tip">
 
            <span className="tool-tip-footer">
              {' '}
             <a href="SOME_VALUE_FROM_PROPS">Ajo</a>
           </span>
 
       </div>
 
     </div>
   );
 }
}


const SimpleLineChart = () => {
  return (
      <>
    <div style={{marginBottom:'200px'}}>
    <h1 className="chart-heading">Bi x axial Chart</h1>
    <LineChart
      width={1200}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis xAxisId="0" dataKey="name" />
      <XAxis xAxisId="1" dataKey="week" allowDuplicatedCategory={false} />
      <XAxis xAxisId="2" dataKey="year" allowDuplicatedCategory={false} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      {/* <Tooltip /> */}
      <Tooltip content={(value)=>renderTooltip(value)} />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>


    <div style={{marginBottom:'200px'}}>
    <h1 className="chart-heading">Triple x axial Chart</h1>
    <LineChart
      width={1200}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <XAxis xAxisId="0" dataKey="name" />
      <XAxis xAxisId="1" dataKey="week" allowDuplicatedCategory={false} />
      <XAxis xAxisId="2" dataKey="year" allowDuplicatedCategory={false} />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      {/* <Tooltip /> */}
      <Tooltip content={(value)=>renderTooltip(value)} />
      <Legend />
      <Line
        type="monotone"
        dataKey="pv"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
    </div>

</>
  );
};

export default SimpleLineChart;