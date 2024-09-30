import React from "react";
import * as css from "./index.css";

export function Button_Main({ text }) {
    return (
        <label className={css.root}>
            <button className={css.title}>{text}</button>
        </label>
    );
}
