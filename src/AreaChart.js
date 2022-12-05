import React from 'react'
import {pdata} from './data'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,Brush,Customized,AreaChart, Area} from 'recharts'
const AreaCharts = () => {
    return (
       <div style={{marginBottom:'200px'}}>
        <h1 className="chart-heading">Area Chart</h1>
        <ResponsiveContainer width="70%"   aspect={3}>
          <AreaChart
            width={500} aspect={3}
            height={300}
            data={pdata}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="student" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="fees" stroke="red" fill="orange" />
          </AreaChart>
        </ResponsiveContainer>
        </div>
  
    )
}

export default AreaCharts
