import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['1', '2', '3'],
  datasets: [
    {
      label: 'OKR Progress',
      data: [50, 40, 10],
      backgroundColor: [
        'tomato',
        'orange',
        'green',
      ],
      borderColor: [
        'tomato',
        'orange',
        'green',
      ],
      borderWidth: 1,
    },
  ],
};
const options = {
  plugins: {
    legend: {
      display: false
    },
  }
}

export default function PieChart() {
  return <Doughnut data={data} options={options} />;
}
