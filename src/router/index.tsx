import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { Home } from "../pages/Home";
import { Login, Register } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { User, UserUpdate } from "../pages/User";
import { Report, ReportNew, ReportInfo, ReportAll } from "../pages/Report";
import { Visit } from "../pages/Visit";

function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="/user" element={<User />}>
                        <Route path="/user/update" element={<UserUpdate />} />
                    </Route>
                    <Route path="/report" element={<Report />}>
                        <Route path="/report/new" element={<ReportNew />} />
                        <Route path="/report/info" element={<ReportInfo />} />
                        <Route path="/report/all" element={<ReportAll />} />
                    </Route>
                </Route>
                <Route path="/visit" element={<Visit />} />
            </Route>
        </Routes>
    );
}

export { AppRouters };
