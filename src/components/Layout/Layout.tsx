import React from "react";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>Header</header>
            <br />
            <Outlet />
            <br />
            <footer>Footer</footer>
        </div>
    );
}

export { Layout };
