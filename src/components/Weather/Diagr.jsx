import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto'

function LineChart() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');

    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Опади',
            data: [65, 59, 80, 81, 56, 55],
            borderColor: 'blue',
            fill: false,
          },
        ],
      },
    });
  }, []);

  return <canvas ref={chartRef} />;
}

export default LineChart;
