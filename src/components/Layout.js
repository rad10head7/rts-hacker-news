import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="main-layout">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}
