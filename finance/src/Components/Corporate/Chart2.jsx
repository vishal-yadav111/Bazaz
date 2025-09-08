import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import Chartdata from './Chartdata.json';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
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
};

const labels = Chartdata.map((item) => item.name);

export const data = {
  labels,
  datasets: [
    {
      label: 'OPD Customers',
      data: Chartdata.map((item) => item.opd),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.4,
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
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      tension: 0.4,
    },
  ],
};

export function Chart2() {
  return <Line options={options} data={data} />;


  

}
