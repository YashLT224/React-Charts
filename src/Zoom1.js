import React,{useState} from "react";
import {
  Label,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceArea
} from "recharts";
// const data = [
//     { name: 1, cost: 4.11, impression: 100 },
//     { name: 2, cost: 2.39, impression: 120 },
//     { name: 3, cost: 1.37, impression: 150 },
//     { name: 4, cost: 1.16, impression: 180 },
//     { name: 5, cost: 2.29, impression: 200 },
//     { name: 6, cost: 3, impression: 499 },
//     { name: 7, cost: 0.53, impression: 50 },
//     { name: 8, cost: 2.52, impression: 100 },
//     { name: 9, cost: 1.79, impression: 200 },
//     { name: 10, cost: 2.94, impression: 222 },
//     { name: 11, cost: 4.3, impression: 210 },
//     { name: 12, cost: 4.41, impression: 300 },
//     { name: 13, cost: 2.1, impression: 50 },
//     { name: 14, cost: 8, impression: 190 },
//     { name: 15, cost: 0, impression: 300 },
//     { name: 16, cost: 9, impression: 400 },
//     { name: 17, cost: 3, impression: 200 },
//     { name: 18, cost: 2, impression: 50 },
//     { name: 19, cost: 3, impression: 100 },
//     { name: 20, cost: 7, impression: 100 }
//   ];

const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
      key:1
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      key:2
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
      key:3
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
      key:4
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
      key:5
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
      key:6
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
      key:7
    },
  ];
  

  // const getAxisYDomain = (from, to, ref, offset) => {
  //   console.log(from)
  //   const refData = data.slice(from - 1, to);
  //   console.log(refData)
  //   let [bottom, top] = [refData[0][ref], refData[0][ref]];
  //   refData.forEach(d => {
  //     if (d[ref] > top) top = d[ref];
  //     if (d[ref] < bottom) bottom = d[ref];
  //   });
  
  //   return [(bottom | 0) - offset, (top | 0) + offset];
  // };
  const initialState = {
    data,
    left: "dataMin",
    right: "dataMax",
    refAreaLeft: "",
    refAreaRight: "",
    top: "dataMax+1",
    bottom: "dataMin-1",
    animation: true
  };
  
  
const Zoom1 = () => {
    const [defaultState,setDefaultState]=useState(initialState);
const {
  data,
  left,
  right,
  refAreaLeft,
  refAreaRight,
  top,
  bottom,
} = defaultState;
const zoom=()=> {
    let { refAreaLeft, refAreaRight, data } = defaultState

    if (refAreaLeft === refAreaRight || refAreaRight === "") {
        setDefaultState((a)=>({...a,refAreaLeft: "", refAreaRight: ""}))
    //   setDefaultState(() => ({
    //     refAreaLeft: "",
    //     refAreaRight: ""
    //   }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    console.log(refAreaLeft,refAreaRight)
    // const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "uv", 1);

    setDefaultState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data:[...data],
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
    }));
  }

  const zoomOut=()=> {
    // setDefaultState(({ data }) => ({
    //   data:[...data],
    //   refAreaLeft: "",
    //   refAreaRight: "",
    //   left: "dataMin", 
    //   right: "dataMax",
    //   top: "dataMax+1",
    // }));
    setDefaultState(initialState)
  }

  return (
    <div className="highlight-bar-charts">
      <button className="btn update" onClick={()=>zoomOut()}>
        Zoom Out
      </button>

      <p>Highlight / Zoom - able Line Chart</p>
      <LineChart
        width={800}
        height={400}
        data={data}
        onMouseDown={e => {
          console.log(e);
          setDefaultState((a)=>({...a,refAreaLeft: e.activeLabel}))
    }}
    onMouseMove={e =>
      defaultState.refAreaLeft &&
      setDefaultState((a)=>({...a,refAreaRight: e.activeLabel}))
    }
     onMouseUp={zoom}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          allowDataOverflow={true}
          dataKey="key"
          domain={[left, right]}
          type="number"
        />
        <YAxis
          allowDataOverflow={true}
          domain={[bottom, top]}
          type="number"
          yAxisId="1"
        />
         
        <Tooltip />
        <Line
          yAxisId="1"
          type="natural"
          dataKey="pv"
          stroke="#8884d8"
          animationDuration={300}
        />
         <Line
          yAxisId="1"
          type="natural"
          dataKey="uv"
          stroke="#82ca9d"
          animationDuration={300}
        />
         
        {refAreaLeft && refAreaRight ? (
          <ReferenceArea
            yAxisId="1"
            x1={refAreaLeft}
            x2={refAreaRight}
            strokeOpacity={0.3}
          />
        ) : null}
      </LineChart>
    </div>
  );
}

export default Zoom1
