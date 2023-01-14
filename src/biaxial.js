import React,{useState} from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,ReferenceArea } from 'recharts';

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

const getAxisYDomain = (from, to, ref, offset) => {
  console.log(ref)
  const refData = data.slice(from - 1, to);
  console.log(refData)
  let [bottom, top] = [refData[0][ref], refData[0][ref]];
  refData.forEach(d => {
    if (d[ref] > top) top = d[ref];
    if (d[ref] < bottom) bottom = d[ref];
  });

  return [(bottom | 0) - offset, (top | 0) + offset];
};
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

const Biaxial = () => {


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
      setDefaultState(() => ({
        refAreaLeft: "",
        refAreaRight: ""
      }));
      return;
    }

    // xAxis domain
    if (refAreaLeft > refAreaRight)
      [refAreaLeft, refAreaRight] = [refAreaRight, refAreaLeft];

    // yAxis domain
    console.log(refAreaLeft,refAreaRight)
    const [bottom, top] = getAxisYDomain(refAreaLeft, refAreaRight, "uv", 1);

    setDefaultState(() => ({
      refAreaLeft: "",
      refAreaRight: "",
      data: data.slice(),
      left: refAreaLeft,
      right: refAreaRight,
      bottom,
      top,
    }));
  }

  const zoomOut=()=> {
    setDefaultState(({ data }) => ({
      data: data.slice(),
      refAreaLeft: "",
      refAreaRight: "",
      left: "dataMin",
      right: "dataMax",
      top: "dataMax+1",
    }));
  }





  
    return (
        <div style={{marginTop:'140px'}}>
        <h1 className="chart-heading">Bi Y axial Graph</h1>
        <button className="btn update" onClick={()=>zoomOut()}>
          Zoom Out
        </button>
        <LineChart
      width={1200}
      height={300}
      data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
       onMouseDown={e => { setDefaultState((a)=>({...a,refAreaLeft: e.activeLabel}))
          }}
          onMouseMove={e =>
            defaultState.refAreaLeft &&
            setDefaultState((a)=>({...a,refAreaRight: e.activeLabel}))
          }
           onMouseUp={zoom}
    >
       <XAxis xAxisId="0" dataKey="key" domain={[left, right]} hide={true} />
      <XAxis xAxisId="1" dataKey="name"    />
      {/* <XAxis xAxisId="1" dataKey="week" allowDuplicatedCategory={false} /> */}
      <YAxis yAxisId="left"  domain={[bottom, top]} />
      {/* <YAxis yAxisId="right" orientation="right" /> */}
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip/>
      <Legend />
       <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }}              animationDuration={300}/>
       <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#82ca9d"             animationDuration={300}/>
       {refAreaLeft && refAreaRight ? (
            <ReferenceArea
              yAxisId="left"
              x1={refAreaLeft}
              x2={refAreaRight}
              strokeOpacity={0.3}
            />
          ) : null}
    </LineChart>


        </div>
    )
}

export default Biaxial
