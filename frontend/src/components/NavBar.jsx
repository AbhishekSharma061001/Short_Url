import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";

export default function NavBar() {
  const { isLoggedIn, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to={isLoggedIn ? "/dashboard" : "/"} className="brand">
          ShortURL
        </Link>
      </div>

      <div className="nav-right">
        <div className="nav-links">
          {!isLoggedIn ? (
            <>
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
              <Link to="/signup" className="nav-link">
                Signup
              </Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
              <Link to="/myurls" className="nav-link">
                MyURLs
              </Link>
            </>
          )}
        </div>

        <div className="user-menu">
          <button
            type="button"
            className={isLoggedIn ? "user-trigger nav-btn" : "settings-trigger nav-btn"}
            onClick={() => setDropdownOpen((open) => !open)}
          >
            {isLoggedIn ? user?.name || "User" : "Settings"}
          </button>
          {dropdownOpen && (
            <div className="user-dropdown">
              <button type="button" className="dropdown-item" onClick={toggleTheme}>
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </button>
              {isLoggedIn && (
                <button type="button" className="dropdown-item" onClick={handleLogout}>
                  Logout
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
