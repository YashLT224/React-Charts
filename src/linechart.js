import React from 'react'
import {pdata} from './data'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,Brush,Customized,AreaChart, Area} from 'recharts'

const data = [
    {
      name: 'January',
      Iphone: 4000
    },
    {
      name: "March",
      Iphone: 1000,
    },
    {
      name: "May",
      Iphone: 4000,
    },
    {
      name: "July",
      Iphone: 800,
    },
    {
      name: "October",
      Iphone: 1500,
    },
  ];
const Linechart = () => {
    return (
        <div>
             <h1 className="chart-heading">React Line Chart</h1>
             <ResponsiveContainer width="70%" aspect={3}>
             <LineChart data={pdata} width={500} height={200} margin={{ top: 5, right: 300, left: 20, bottom: 5 }} onClick={()=>{}}>
                 <CartesianGrid   strokeDasharray="3 3"/>
                     <XAxis  dataKey="name" interval="preserveStartEnd" tickFormatter={(value) => value + " Programming"} />
                     <XAxis  dataKey="namee" interval="preserveStartEnd" tickFormatter={(value) => value + " Prosmsnkßgramming"}  allowDuplicatedCategory={false}/>
                     <YAxis/>
                     <Brush/>
                     <Legend/>
                     <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff"  }} itemStyle={{ color: "#fff" }} cursor={false} />
                     <Line type="monotone" dataKey="student" strokeWidth="3" stroke="red" activeDot={{r:2}}/> 
                     <Line dataKey="fees" stroke="blue"    strokeDasharray="3 4 5 2"/> 
                     
                   
                     <Customized/>
                 </LineChart>
             </ResponsiveContainer>

             <h2>Quarterly sales figures for mobile phones</h2>
      <ResponsiveContainer width="90%" aspect={3}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 15,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid  horizontal="true" vertical="" stroke="#243240"/>
        <XAxis dataKey="name" tick={{fill:"#fff"}}/>
        <YAxis tick={{fill:"#fff"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Line type="monotone" dataKey="Iphone" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        
      </LineChart>
    </ResponsiveContainer>
  
        </div>
    )
}

export default Linechart
