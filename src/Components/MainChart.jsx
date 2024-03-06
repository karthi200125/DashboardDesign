import Chart from 'chart.js/auto'; // Importing Chart.js auto version
import React, { useEffect, useRef } from 'react';

const Utils = {
  months: ({ count }) => {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.slice(0, count);
  },
};

const MainChart = () => {
  const chartRef = useRef(null);

  const DATA_COUNT = 7;

  // Define dummy data arrays
  const labels = Utils.months({ count: DATA_COUNT });
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'From Studenst',                
        data: [20, 30, 25, 40, 35, 45, 50], 
        borderColor: '#3268dc', 
        backgroundColor: 'rgba(50, 104, 220, 0.5)', 
        tension: 0.4,
      },
      {
        label: 'Dataset 2',
        data: [10, 20, 15, 25, 20, 30, 35], 
        borderColor: 'rgb(54, 162, 235)', 
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        tension: 0.2,
      }
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
        
      animations: {
        radius: {
          duration: 400,
          easing: 'linear',
          loop: (context) => context.active
        }
      },
      hoverRadius: 12,
      hoverBackgroundColor: 'white',
      interaction: {
        mode: 'nearest',
        intersect: false,
        axis: 'x'
      },
      plugins: {
        tooltip: {
          enabled: true
        }
      }
    },
  };

  useEffect(() => {
    let chart;
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      chart = new Chart(ctx, config);

      return () => {
        chart.destroy();
      };
    }
  }, []);

  return (
    <div className='w-full '>      
      <canvas ref={chartRef} />
    </div>
  );
};

export default MainChart;
