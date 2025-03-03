import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const { data } = await axios.get("http://localhost:5000/api/dashboard");
      setUser(data);
    };
    fetchUserData();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Dashboard</h2>
      <p>Welcome, {user.username}!</p>
      <ul className="dashboard-info">
        <li>Email: {user.email}</li>
        <li>Balance: ${user.balance.toFixed(2)}</li>
        <li>Recent Transactions: (This should be dynamically fetched)</li>
      </ul>
      <button className="btn btn-primary">View Transaction History</button>
      <button className="btn btn-secondary">Transfer Money</button>
    </div>
  );
}

export default Dashboard;
