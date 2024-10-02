import React from "react";
import * as css from "./index.css";
import { Link } from "react-router-dom";

export function Button_Main({ text }) {
    return (
        <label className={css.root}>
            <button className={css.title}>{text}</button>
        </label>
    );
}

export function Button_Link({ text, to }) {
    return (
        <label className={css.root}>
            <button className={css.title}>
                <Link className={css.link} to={to}>
                    {text}
                </Link>
            </button>
        </label>
    );
}
