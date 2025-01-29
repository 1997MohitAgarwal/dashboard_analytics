import React from 'react';
import { Bar } from 'react-chartjs-2'; // Import Bar chart from react-chartjs-2
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

// Register necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
    const tableData = [
        { id: '#001', activity: 'User Registration', status: 'Completed', date: 'Jan 28, 2025' },
        { id: '#002', activity: 'New Order', status: 'Pending', date: 'Jan 29, 2025' },
        { id: '#003', activity: 'Payment Received', status: 'Completed', date: 'Jan 30, 2025' },
        { id: '#004', activity: 'Product Shipped', status: 'Completed', date: 'Jan 31, 2025' },
        { id: '#005', activity: 'Invoice Generated', status: 'Pending', date: 'Feb 1, 2025' },
      ];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  // Chart.js data configuration
  const data = {
    labels: days,
    datasets: [
        {
          label: 'Sales',
          data: [120, 150, 180, 130, 220, 170, 250], // Mock sales data for 7 days
          backgroundColor: 'rgb(77, 49, 204)', // Solid color for the bars
          borderColor: 'rgb(13, 87, 87)', // Border color for bars
          borderWidth: 1, // Thin border for the bars
          barThickness: 30, // Set the thickness of the bars
          borderRadius: 10,
          hoverBackgroundColor: 'rgba(83, 117, 202, 0.8)', // Hover effect
        },
      ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '7 Day Sales Data', // Title of the chart
        font: {
          size: 20,
        },
        padding: {
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Custom tooltip background
        titleColor: '#fff', // Tooltip title color
        bodyColor: '#fff', // Tooltip body color
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines on x-axis
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
          },
        },
      },
      y: {
        grid: {
          display: false, // Hide grid lines on y-axis
        },
        ticks: {
          font: {
            size: 14,
            weight: 'bold',
          },
          beginAtZero: true,
        },
      },
    },
  };


  // Additional data for the dashboard
  const dashboardStats = {
    totalUsers: 1200,
    newUsers: 75,
    totalRevenue: 35000,
    ordersCompleted: 945,
  };

  return (
    <div className="dashboard-container">

      <div className="stats-container">
        <div className="stat-item">
          <h4>Total Users</h4>
          <p>{dashboardStats.totalUsers}</p>
        </div>
        <div className="stat-item">
          <h4>New Users</h4>
          <p>{dashboardStats.newUsers}</p>
        </div>
        <div className="stat-item">
          <h4>Total Revenue</h4>
          <p>${dashboardStats.totalRevenue}</p>
        </div>
        <div className="stat-item">
          <h4>Orders Completed</h4>
          <p>{dashboardStats.ordersCompleted}</p>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="chart-container">
        <h3 className='section'>Sales Overview (Last 7 Days)</h3>
        <Bar data={data} options={options} />
      </div>

      <div className="table-container-new">
        <h2 className="section">Recent Activities</h2>
        <table className="activities-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Activity</th>
              <th>Status</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.activity}</td>
                <td>{row.status}</td>
                <td>{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
