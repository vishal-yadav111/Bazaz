import React from 'react'
import { AreaChart,XAxis,YAxis,CartesianGrid,Tooltip,Area,BarChart,Bar,Legend,RadialBarChart,RadialBar, ResponsiveContainer,Radar,PolarRadiusAxis,PolarGrid,PolarAngleAxis,RadarChart} from "recharts";
import Chartdata from './Chartdata.json'
import { Col, Row } from 'react-bootstrap';
export const Chart = () => {

  return (
  
 

        <ResponsiveContainer width={'100%'} height={350}>

<AreaChart  data={Chartdata}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
    </linearGradient>
  </defs>
  <XAxis dataKey="name" />
  <YAxis />
  <CartesianGrid strokeDasharray="3 3" />
  <Tooltip />
  <Area type="monotone" dataKey="opd" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
  <Area type="monotone" dataKey="ipd" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
  <Area type="monotone" dataKey="emergency" stroke="#ea3b24ff" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>


<BarChart  data={Chartdata}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="opd" fill="#8884d8" />
  <Bar dataKey="ipd" fill="#82ca9d" />
  <Bar dataKey="emergency" fill="#ff1b1bff" />
</BarChart>


<RadialBarChart
 
  innerRadius="10%"
  outerRadius="80%"
  data={Chartdata}
  startAngle={180}
  endAngle={0}
>
  <RadialBar label={{ fill: '#ea3535ff', position: 'insideStart' }} background dataKey='uv'  fill="#82ca9d" />
   
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>

<RadarChart outerRadius={90} width={730} height={250} data={Chartdata}>
  <PolarGrid />
  <PolarAngleAxis dataKey="name" />
  <PolarRadiusAxis angle={30} domain={[0, 150]} />
  <Radar name="Mike" dataKey="ipd" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
  <Radar name="Lily" dataKey="emergency" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
  <Legend />
</RadarChart>
<Bar></Bar>
</ResponsiveContainer>


   
  )
}
