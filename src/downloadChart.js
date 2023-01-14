import FileSaver from "file-saver";
import React, { useCallback, useState } from "react";
import { useCurrentPng } from "recharts-to-png";
import {pdata} from './data'
import {ResponsiveContainer,LineChart,Line,XAxis,YAxis,CartesianGrid,Legend,Tooltip,Brush,Customized,AreaChart, Area} from 'recharts'

const DownloadChart = () => {
    const [getAreaPng, { ref: areaRef, }] = useCurrentPng();
    const handleAreaDownload = useCallback(async () => {
        const png = await getAreaPng();
        if (png) {
          FileSaver.saveAs(png, "area-chart.png");
        }
      }, [getAreaPng]);

 
      

    return (
        <div style={{marginTop:'140px'}}>
                <h1 className="chart-heading">Download Chart as Image</h1>
             <ResponsiveContainer width="100%" aspect={3}>
             <LineChart ref={areaRef} data={pdata} width={700} height={200} margin={{ top: 5, right: 300, left: 20, bottom: 5 }} onClick={()=>{}}>
                 <CartesianGrid   strokeDasharray="3 3"/>
                     <XAxis  dataKey="name" interval="preserveStartEnd" tickFormatter={(value) => value + " Programming"} />
                     <XAxis  dataKey="namee" interval="preserveStartEnd" tickFormatter={(value) => value + " Prosmsnkßgramming"}  allowDuplicatedCategory={false}/>
                     <YAxis/>
                     <Legend/>
                     <Brush/>
                   
                     <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff"  }} itemStyle={{ color: "#fff" }} cursor={false} />
                     <Line type="monotone" dataKey="student" strokeWidth="3" stroke="red" activeDot={{r:2}}/> 
                     <Line dataKey="fees" stroke="blue"    strokeDasharray="3 4 5 2"/> 
                     
                   
                     <Customized/>
                 </LineChart>
             </ResponsiveContainer>
             <button onClick={handleAreaDownload}>
          <code>Download Area Chart</code>
        </button>
        </div>
    )
}

export default DownloadChart
