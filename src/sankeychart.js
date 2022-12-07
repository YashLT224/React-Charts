import React from 'react'
import {
    Sankey,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";
const data0 = {
    "nodes": [
      {
        "name": "Visit"
      },
      {
        "name": "Direct-Favourite"
      },
      {
        "name": "Page-Click"
      },
      {
        "name": "Detail-Favourite"
      },
      {
        "name": "Lost"
      }
    ],
    "links": [
      {
        "source": 0,
        "target": 1,
        "value": 3728.3
      },
      {
        "source": 0,
        "target": 2,
        "value": 354170
      },
      {
        "source": 2,
        "target": 3,
        "value": 62429
      },
      {
        "source": 2,
        "target": 4,
        "value": 291741
      }
    ]
  };
     
const Sankeychart = () => {
    return (
        <>
     
  
  
      
      <div style={{marginBottom:'200px'}}>
      <h1 className="chart-heading">Sanky Chart</h1>
      <Sankey
  width={960}
  height={500}
  data={data0}
  node={{stroke: '#77c878', strokeWidth: 2}} 
//   node={<MyCustomNode />}
  nodePadding={50}
  margin={{
   left: 200,
    right: 200,
    top: 100,
    bottom: 100,
  }}
  link={{ stroke: '#77c878' }}
>
  <Tooltip />
</Sankey>
      </div>
  
  </>
    );
}

export default Sankeychart
