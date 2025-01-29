import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <div className="home-container">
      <div className="main-content">
        {/* Dashboard Overview */}
        <section className="dashboard-overview">
          <h1 className="section-heading">Welcome to Insightly Dashboard</h1>
          <p className="section-description">
            Your go-to platform for managing key metrics, user data, and insights.
          </p>

          {/* Adding the Image */}
          <div className="image-container">
            <img src="https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Insightly Logo" className="insightly-logo" />
          </div>
          <p className="image-description">
            Insightly is a powerful, user-friendly dashboard that helps you track and manage your business performance. With real-time data, key metrics, and user insights, Insightly provides everything you need to make informed decisions and accelerate growth. It is designed for both small businesses and large enterprises to optimize their operations and increase efficiency.
          </p>
        </section>

        {/* Key Metrics Section */}
        <section className="key-metrics">
          <h2 className="section-title">Key Metrics</h2>
          <div className="metrics-cards">
            <div className="metric-card">
              <h3 className="metric-title">Total Revenue</h3>
              <p className="metric-value">$12,340</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">Active Users</h3>
              <p className="metric-value">3,245</p>
            </div>
            <div className="metric-card">
              <h3 className="metric-title">Sales Today</h3>
              <p className="metric-value">$1,890</p>
            </div>
          </div>
        </section>

        {/* Recent Activities Section */}
        <section className="recent-activities">
          <h2 className="section-title">Recent Activities</h2>
          <div className="activities-table-wrapper">
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
                <tr>
                  <td>#001</td>
                  <td>User Registration</td>
                  <td className="completed">Completed</td>
                  <td>Jan 28</td>
                </tr>
                <tr>
                  <td>#002</td>
                  <td>New Order</td>
                  <td className="pending">Pending</td>
                  <td>Jan 29</td>
                </tr>
                <tr>
                  <td>#003</td>
                  <td>Payment Received</td>
                  <td className="completed">Completed</td>
                  <td>Jan 30</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
