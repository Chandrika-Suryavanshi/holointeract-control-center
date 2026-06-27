import "./Navbar.css";

import {
  FiBell,
  FiMoon,
  FiSun,
  FiSearch,
  FiUser,
} from "react-icons/fi";

import { useTheme } from "../context/ThemeContext";

function Navbar() {

  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">

      <h2 className="page-title">Dashboard</h2>

      <div className="navbar-right">

        {/* Search Box */}

        <div className="search-box">

          <FiSearch />

          <input
            type="text"
            placeholder="Search..."
          />

        </div>

        {/* Notification */}

        <button className="nav-icon">

          <FiBell />

        </button>

        {/* Theme Toggle */}

        <button
          className="nav-icon"
          onClick={toggleTheme}
        >

          {theme === "light" ? (
            <FiMoon />
          ) : (
            <FiSun />
          )}

        </button>

        {/* Profile */}

        <div className="profile">

          <div className="profile-icon">
            <FiUser />
          </div>

          <div>

            <h4>Admin</h4>

            <p>Administrator</p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;