
 import {currData,newData} from './data'

import React,{useEffect,useState} from 'react'
import {pdata} from './data'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,Brush,Customized,AreaChart, Area} from 'recharts'
const AreaCharts = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const list = [];
        for (let i = 0; i < currData.length; i++) {
            const cdate=currData[i].cx.split(" ")[0];
            const date=currData[i].x.split(" ")[0];
            
             list.push({...currData[i],cx:cdate,x:date})
        }
        setData(list)
      }, []);

    return (
       <div style={{marginBottom:'200px'}}>
        <h1 className="chart-heading">Analytics Data Analysis</h1>
        <ResponsiveContainer width="90%"   aspect={3}>
          <AreaChart
            width={700} aspect={3}
            height={500}
            data={currData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis xAxisId="0" dataKey="cx" />
            <XAxis xAxisId="1" dataKey="x"  allowDuplicatedCategory={false}/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="cy" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="y" stroke="red" fill="orange" />
          </AreaChart>
        </ResponsiveContainer>

        <h1 className="chart-heading">Analytics Data Analysis</h1>
        <ResponsiveContainer width="90%"   aspect={3}>
          <AreaChart
            width={700} aspect={3}
            height={500}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="2 3" />
            <XAxis xAxisId="0" dataKey="cx" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="cy" stroke="#318fd6" fill="#318fd6" />
            <Area type="monotone" dataKey="y" stroke="#9e9409" fill=" #9e6709" />
            
          </AreaChart>
        </ResponsiveContainer>
        </div>
  
    )
}

export default AreaCharts
