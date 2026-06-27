import DashboardLayout from "../components/DashboardLayout";
import "./Analytics.css";

import {
  Line,
  Bar,
  Doughnut,
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import {
  monthlyInteractions,
  campaignReach,
  deviceStatus,
  campaigns,
} from "../data/analytics";

import {
  FiEye,
  FiActivity,
  FiTrendingUp,
  FiMonitor,
} from "react-icons/fi";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {

  const lineData = {
    labels: monthlyInteractions.map(item => item.month),

    datasets: [
      {
        label: "Interactions",
        data: monthlyInteractions.map(item => item.interactions),

        borderColor: "#2563eb",
        backgroundColor: "rgba(37,99,235,.15)",

        fill: true,
        tension: .4,
      },
    ],
  };

  const barData = {
    labels: campaignReach.map(item => item.campaign),

    datasets: [
      {
        label: "Reach %",
        data: campaignReach.map(item => item.reach),

        borderRadius: 10,

        backgroundColor: [
          "#2563eb",
          "#22c55e",
          "#f59e0b",
          "#ef4444",
        ],
      },
    ],
  };

  const doughnutData = {
    labels: ["Online", "Offline"],

    datasets: [
      {
        data: [
          deviceStatus.online,
          deviceStatus.offline,
        ],

        backgroundColor: [
          "#22c55e",
          "#ef4444",
        ],

        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <DashboardLayout>

      <div className="analytics">

        <div className="analytics-header">

          <h1>Analytics Dashboard</h1>

          <p>
            Monitor campaigns, engagement and device performance.
          </p>

        </div>

        {/* KPI CARDS */}

        <div className="analytics-cards">

          <div className="analytics-card">

            <FiEye className="analytics-icon blue"/>

            <h3>Total Views</h3>

            <h2>1.2M</h2>

            <span>+12% this month</span>

          </div>

          <div className="analytics-card">

            <FiActivity className="analytics-icon green"/>

            <h3>Campaigns</h3>

            <h2>24</h2>

            <span>18 Running</span>

          </div>

          <div className="analytics-card">

            <FiTrendingUp className="analytics-icon orange"/>

            <h3>Engagement</h3>

            <h2>84%</h2>

            <span>Above average</span>

          </div>

          <div className="analytics-card">

            <FiMonitor className="analytics-icon red"/>

            <h3>Devices</h3>

            <h2>128</h2>

            <span>112 Online</span>

          </div>

        </div>

        {/* TOP CHARTS */}

        <div className="top-charts">

          <div className="chart-card large">

            <h2>Monthly Interactions</h2>

            <div className="chart-container">

              <Line
                data={lineData}
                options={chartOptions}
              />

            </div>

          </div>

          <div className="chart-card small">

            <h2>Device Status</h2>

            <div className="chart-container">

              <Doughnut
                data={doughnutData}
                options={chartOptions}
              />

            </div>

          </div>

        </div>

        {/* BAR CHART */}

        <div className="chart-card">

          <h2>Campaign Reach</h2>

          <div className="bar-chart">

            <Bar
              data={barData}
              options={chartOptions}
            />

          </div>

        </div>

        {/* TABLE */}

        <div className="table-card">

          <h2>Campaign Performance</h2>

          <table>

            <thead>

              <tr>

                <th>Campaign</th>
                <th>Reach</th>
                <th>Engagement</th>
                <th>Status</th>

              </tr>

            </thead>

            <tbody>

              {campaigns.map((campaign,index)=>(

                <tr key={index}>

                  <td>{campaign.name}</td>

                  <td>{campaign.reach}</td>

                  <td>{campaign.engagement}</td>

                  <td>
                    <span className="status-badge">
                      {campaign.status}
                    </span>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </DashboardLayout>
  );
}

export default Analytics;