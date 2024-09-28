import React from "react";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    
    return (
        <div>
            <h4>webDashboard</h4>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/dashboard/user">User</Link>
            <Link to="/dashboard/report">Reports</Link>
            <Outlet />
        </div>
    );
}

export { Dashboard };
