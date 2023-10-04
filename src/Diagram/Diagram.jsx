import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'
// import css from './Diagram.module.css'

function ChartComponent() {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); 
  
    useEffect(() => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
  
      const ctx = chartRef.current.getContext('2d');
  
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
          datasets: [
            {
              label: 'Урожайність',
              data: [12, 19, 7, 10, 2, 5],
              backgroundColor: ['rgba(64, 64, 236, 0.6)', 'rgba(64, 64, 236, 0.6)', 'rgba(64, 64, 236, 0.6)', 'rgba(64, 64, 236, 0.6)', 'rgba(64, 64, 236, 0.6)', 'rgba(64, 64, 236, 0.6)'],
            },
          ],
        },
      });
    }, []);
  
    return <canvas ref={chartRef}/>;
  }
  
  export default ChartComponent;