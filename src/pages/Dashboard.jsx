import DashboardLayout from "../components/DashboardLayout";

import dashboardStats from "../data/dashboardStats";
import devices from "../data/devices";

import StatCard from "../components/StatCard";
import DeviceCard from "../components/DeviceCard";

import "./Dashboard.css";
import alerts from "../data/alerts";
import AlertCard from "../components/AlertCard";

function Dashboard() {
  return (
    <DashboardLayout>

      <div className="dashboard">

        <div className="welcome">
          <h1>Welcome Back 👋</h1>
          <p>Monitor your HoloInteract devices in real time.</p>
        </div>

        <div className="stats-grid">
          {dashboardStats.map((stat) => (
            <StatCard
              key={stat.id}
              {...stat}
            />
          ))}
        </div>

        <h2 className="section-title">
          Recent Devices
        </h2>

        <div className="device-grid">
          {devices.map((device) => (
            <DeviceCard
              key={device.id}
              device={device}
            />
          ))}
        </div>
        <h2 className="section-title">
          Recent Alerts
        </h2>

        <div>
          {alerts.map((alert) => (
          <AlertCard
            key={alert.id}
            alert={alert}
          />
          ))}
        </div>

      </div>

    </DashboardLayout>
  );
}

export default Dashboard;