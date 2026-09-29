import React, { useState } from "react";
import { FaHome, FaLink, FaTags, FaCog, FaUserCircle, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <FaBars />
      </div>

       {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className={`sidebar ${open ? "open" : ""}`}>
        {/* App name + tagline */}
        <div className="sidebar-header">
          <h2 className="head">LinkVault</h2>
          <p className="tagline">Save · Organize · Access Anywhere</p>
        </div>

        {/* Navigation */}
        <ul className="nav">
          <li>
            <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaHome className="icon" /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/all" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaLink className="icon" /> All Links
            </NavLink>
          </li>
          <li>
            <NavLink to="/tags" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaTags className="icon" /> Tags
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "active" : "")}>
              <FaCog className="icon" /> Settings
            </NavLink>
          </li>
        </ul>

        {/* Profile section */}
        <div className="profile">
          <FaUserCircle className="profile-icon" />
          <span>Mxolisi Mxolisi</span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
