import React from "react";
import { Link, Outlet } from "react-router-dom";
import { SearchForm } from "../SearchForm";
import * as css from "./layout.css";

function Layout() {
    return (
        <div className={css.root}>
            <header className={css.header}>Header</header>
            <br />
            <Link to="/" className={css.link}>Home</Link>
            <br />
            <SearchForm />
            <Outlet />
            <br />
            <footer className={css.footer}>Footer</footer>
        </div>
    );
}

export { Layout };
