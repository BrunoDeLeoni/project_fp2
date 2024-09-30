import React from "react";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import { Outlet } from "react-router-dom";
import * as css from "./layout.css";

function Layout() {
    return (
        <div className={css.root}>
            <Header></Header>
            <div className={css.outlet}>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    );
}

export { Layout };
