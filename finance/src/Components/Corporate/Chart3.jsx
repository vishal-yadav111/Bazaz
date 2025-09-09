
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
   PointElement, Filler
} from 'chart.js';
import { Bar, Line,Scatter } from 'react-chartjs-2';
import Chartdata from './Chartdata.json';
import {Pie} from 'react-chartjs-2';
import { Bubble } from 'react-chartjs-2';
import { Card, Col, Row } from 'react-bootstrap';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
PointElement,Filler,

  Title,
  Tooltip,
  Legend,ArcElement
);

export const options = {
  responsive: true,
 
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Data Chart',
     
    },
  },
   scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = Chartdata.map((item) => item.name);

export const data = {
  labels,
  datasets: [
     
    {
       backgroundColor: 'rgba(53, 162, 235, 0.5)',
      label: 'OPD Customers',
      data: Chartdata.map((item) => item.opd),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(64, 216, 87, 0.5)',
      tension: 0.4,
       fill: true,
    },
    {
      label: 'IPD Customers',
      data: Chartdata.map((item) => item.ipd),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      tension: 0.4,
    },
    {
      label: 'Emergency Customers',
      data: Chartdata.map((item) => item.emergency),
      borderColor: 'rgb(75, 192, 192)',
      backgroundColor: 'rgba(209, 42, 42, 0.5)',
 
    },
  ],
};


export const data2 = {
  labels,
  datasets: [
     
    {
       backgroundColor: 'rgba(53, 162, 235, 0.5)',
      label: 'OPD Customers',
      data: Chartdata.map((item) => item.opd),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(223, 61, 99, 0.5)',
  tension:0.5,
       fill: true,
    },
    {
      label: 'IPD Customers',
      data: Chartdata.map((item) => item.ipd),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
     fill: true,
     tension:0.2,
    },
    {
      label: 'Emergency Customers',
      data: Chartdata.map((item) => item.emergency),
      borderColor: 'rgba(23, 254, 254, 1)',
      backgroundColor: 'rgba(3, 97, 97, 0.5)',
 fill: true,
 tension:0.3,
    },
  ],
};
export const Scatterdata={
  datasets:[ 
  {label:'IPD VS OPD',
    data:Chartdata.map((item,i)=>({
      x:item.opd,
      y:item.ipd}
      
    )),
    backgroundColor:'red'
}, 
{label:'emergency VS OPD',
  data:Chartdata.map((item,i)=>(
    {
      x:item.opd,
      y:item.emergency
    }
  ))
  ,backgroundColor:'yellow'
}, 
 {label:'IPD VS emergency',
  data:Chartdata.map((item,key)=>(
    {
     x:item.ipd,
y:item.emergency
    }
  ))
  ,backgroundColor:'green'
 }
]
};
export const data3 = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: Chartdata.map((item) => item.opd),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 2',
      data: Chartdata.map((item) => item.ipd),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: Chartdata.map((item) => item.emergency),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
  ],
};
 

  

export const Chart3 = () => {
  return (
    <>
    <Row>
      <Col>
    <div style={{justifyContent:'center',alignItems:'center',display:'flex'}}>
    <Card style={{backgroundColor:'white',minWidth:'100%',border:'1px solid',borderColor:'gray'}}>
   <Bar options={options} data={data} />
   </Card>
   </div>
   </Col>
  <Col>
   <Card style={{minWidth:'100%'}}>
     <Line options={options} data={data2} />
     </Card>
     </Col>
</Row>

  <Card style={{height:'80%',width:'50%',backgroundColor:'rgba(222, 241, 255, 1)'}}>
<Scatter options={options} data={Scatterdata} />
</Card>
<Row>
  <Col>
  
    <Scatter options={options} data={Scatterdata} />
 
  </Col>
  <Col>
   <Bar options={options} data={data2} />
  </Col>
</Row>

</>
   
  )
}
