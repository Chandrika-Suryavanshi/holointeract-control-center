import {
  FiMonitor,
  FiActivity,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const dashboardStats = [
  {
    id: 1,
    title: "Total Devices",
    value: "128",
    icon: FiMonitor,
    color: "#2563EB",
  },
  {
    id: 2,
    title: "Active Devices",
    value: "112",
    icon: FiActivity,
    color: "#22C55E",
  },
  {
    id: 3,
    title: "Today's Interactions",
    value: "8,542",
    icon: FiUsers,
    color: "#F59E0B",
  },
  {
    id: 4,
    title: "Campaign Reach",
    value: "96%",
    icon: FiTrendingUp,
    color: "#EF4444",
  },
];

export default dashboardStats;