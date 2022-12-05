import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";
const LegendToggling = () => {
    let inputLabels = [
        { key: "prosumer1", color: "#8884d8" },
        { key: "prosumer2", color: "#82ca9d" },
        { key: "prosumer3", color: "#81cc2d" },
      ];

      
    const [barProps, setBarProps] = useState(
        inputLabels.reduce(
          (a, { key }) => {
            a[key] = false;
            return a;
          },
          { hover: null }
        )
      );

  let inputData = {
    dataKey: "hour",
    oyLabel: "KWh",
    oxLabel: "hours",
    yLimit: [0, 20000],
    values: [
      { hour: 0, prosumer1: 4000, prosumer2: 2400, prosumer3: 2120 },
      { hour: 1, prosumer1: 3000, prosumer2: 1398 },
      { hour: 2, prosumer1: 2000, prosumer2: 9800, prosumer3: 3220 },
      { hour: 3, prosumer1: 2780, prosumer2: 3908 },
      { hour: 4, prosumer1: 1890, prosumer2: 4800, prosumer3: 1220 },
      { hour: 5, prosumer1: 2390, prosumer2: 3800 },
      { hour: 6, prosumer1: 3490, prosumer2: 4300 },
      { hour: 7, prosumer1: 4000, prosumer2: 2400, prosumer3: 2120 },
      { hour: 9, prosumer1: 3000, prosumer2: 1398 },
      { hour: 10, prosumer1: 2000, prosumer2: 9800, prosumer3: 3220 },
      { hour: 11, prosumer1: 2780, prosumer2: 3908 },
      { hour: 12, prosumer1: 1890, prosumer2: 4800, prosumer3: 1220 },
      { hour: 13, prosumer1: 2390, prosumer2: 3800 },
      { hour: 14, prosumer1: 3490, prosumer2: 4300 },
      { hour: 15, prosumer1: 1890, prosumer2: 4800, prosumer3: 1220 },
      { hour: 16, prosumer1: 2390, prosumer2: 3800 },
      { hour: 17, prosumer1: 3490, prosumer2: 4300 },
      { hour: 18, prosumer1: 4000, prosumer2: 2400, prosumer3: 2120 },
      { hour: 19, prosumer1: 3000, prosumer2: 1398 },
      { hour: 20, prosumer1: 2000, prosumer2: 9800, prosumer3: 3220 },
      { hour: 21, prosumer1: 2780, prosumer2: 3908 },
      { hour: 22, prosumer1: 1890, prosumer2: 4800, prosumer3: 1220 },
      { hour: 23, prosumer1: 2390, prosumer2: 3800 },
    ],
  };
  console.log(barProps)

  const handleLegendMouseEnter = (e) => {
    if (!barProps[e.dataKey]) {
      setBarProps({ ...barProps, hover: e.dataKey });
    }
  };
  const handleLegendMouseLeave = (e) => {
    setBarProps({ ...barProps, hover: null });
  };

  const selectBar = (e) => {
    setBarProps({
      ...barProps,
      [e.dataKey]: !barProps[e.dataKey],
      hover: null
    });
  };


  return (
    <div style={{ marginTop: "40px" }}>
      <h1 className="chart-heading">Legend Toggling</h1>
      <BarChart
        width={1100}
        height={300}
        data={inputData.values}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={inputData.dataKey}>
          <Label
            value={inputData.oxLabel}
            position="insideBottomRight"
            dy={10}
            dx={20}
          />
        </XAxis>
        <YAxis type="number" domain={inputData.yLimit}>
          <Label
            value={inputData.oyLabel}
            position="left"
            angle={-90}
            dy={-20}
            dx={-10}
          />
        </YAxis>
        <Tooltip />
        <Legend
          onClick={selectBar}
          onMouseOver={handleLegendMouseEnter}
          onMouseOut={handleLegendMouseLeave}
        />
         {inputLabels.map((label, index) => (
          <Bar
            key={index}
            dataKey={label.key}
            fill={label.color}
            stackId={inputData.dataKey}
            hide={barProps[label.key] === true}
            fillOpacity={Number(
              barProps.hover === label.key || !barProps.hover ? 1 : 0.6
            )}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default LegendToggling;
