import React from "react";
import { Link, Outlet } from "react-router-dom";

export function User() {
    return (
        <div>
            <h4>webUser</h4>
            <Link to="/dashboard/update">Update</Link>
            <Outlet />
        </div>
    );
}

export function UserUpdate() {
    return (
        <div>
            <h4>webUserUpdate</h4>
        </div>
    );
}
