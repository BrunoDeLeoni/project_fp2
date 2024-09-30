import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home";
import { Login, Register } from "../pages/Login";
import { Dashboard } from "../pages/Dashboard";
import { User, UserUpdate } from "../pages/User";
import { Report, ReportNew, ReportInfo, ReportAll } from "../pages/Report";
import { Visit } from "../pages/Visit";
import { NotPage } from "../pages/NotPage";
import { Loading } from "../components/loading/Loading";

function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />}>
                    <Route path="user" element={<User />} />
                    <Route path="update" element={<UserUpdate />} />
                    <Route path="report" element={<Report />} />
                    <Route path="new" element={<ReportNew />} />
                    <Route path="all" element={<ReportAll />} />
                    <Route path="info" element={<ReportInfo />} />
                </Route>
                <Route path="/visit" element={<Visit />} />
                <Route path="/test" element={<Loading />} />
                <Route path="*" element={<NotPage />} />
            </Route>
        </Routes>
    );
}

export { AppRouters };
