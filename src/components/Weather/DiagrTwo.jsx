import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'
import css from './Weather.module.css'
function PieChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Humidity', 'Pressure', 'PM10', 'PM25'],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: ['#3a38c7aa', '#9e38c7aa', '#c7c538aa', '#38c752aa'],
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} className={css.radius}/>;
}

export default PieChart;
