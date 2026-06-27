import {
  FiHome,
  FiBarChart2,
  FiMonitor,
  FiSettings,
} from "react-icons/fi";

const menuItems = [
  {
    id: 1,
    title: "Dashboard",
    icon: FiHome,
    path: "/dashboard",
  },

  {
    id: 2,
    title: "Analytics",
    icon: FiBarChart2,
    path: "/analytics",
  },

  {
    id: 3,
    title: "Devices",
    icon: FiMonitor,
    path: "#",
    disabled: true,
  },

  {
    id: 4,
    title: "Settings",
    icon: FiSettings,
    path: "#",
    disabled: true,
  },
];

export default menuItems;