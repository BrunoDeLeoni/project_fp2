import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Layout } from "../components/Layout/Layout";
import { Search } from "../pages/Search";
import { Item } from "../pages/Item";

function AppRouters() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/search/:query" element={<Search />} />
                <Route path="/item/:id" element={<Item />} />
            </Route>
        </Routes>
    );
}

export { AppRouters };
