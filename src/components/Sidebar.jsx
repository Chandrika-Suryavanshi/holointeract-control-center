import { NavLink, useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import "./Sidebar.css";
import menuItems from "../data/menuItems";

import { useAuth } from "../context/AuthContext";

function Sidebar() {

  const navigate = useNavigate();

  const { logout } = useAuth();

  function handleLogout() {

    logout();

    navigate("/");

  }

  return (

    <aside className="sidebar">

      {/* Logo */}

      <div className="sidebar-logo">

        <h2>HoloInteract</h2>

        <p>Control Center</p>

      </div>

      {/* Navigation */}

      <nav className="sidebar-menu">

        {menuItems.map((item) => {

          const Icon = item.icon;

          return (

            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "sidebar-link active"
                  : "sidebar-link"
              }
            >

              <Icon className="sidebar-icon" />

              <span>{item.title}</span>

            </NavLink>

          );

        })}

      </nav>

      {/* Logout */}

      <div className="sidebar-footer">

        <button
          className="logout-btn"
          onClick={handleLogout}
        >

          <FiLogOut />

          <span>Logout</span>

        </button>

      </div>

    </aside>

  );
}

export default Sidebar;