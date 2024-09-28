import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Report() {
    
    return (
        <div>
            <h4>webReport</h4>
            <Link to="/dashboard/new">New</Link>
            <Link to="/dashboard/info">More info...</Link>
            <Link to="/dashboard/all">All</Link>
            <Outlet/>
        </div>
    );
}

export function ReportNew() {
    
    return (
        <div>
            <h4>webReportNew</h4>
        </div>
    );
}

export function ReportInfo() {
    
    return (
        <div>
            <h4>webReportInfo</h4>
        </div>
    );
}

export function ReportAll() {
    
    return (
        <div>
            <h4>webReportAll</h4>
        </div>
    );
}