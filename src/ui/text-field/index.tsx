import React from "react";
import * as css from "./index.css";

export function TextField_Login({ text, name, type }) {
    return (
        <label className={css.root}>
            <h3 className={css.title}>{text}</h3>
            <input name={name} type={type} className={css.input} required />
        </label>
    );
}

export function TextField_Register({ text, name, type }) {
    return (
        <label className={css.root}>
            <h3 className={css.title}>{text}</h3>
            <input name={name} type={type} className={css.input} required />
        </label>
    );
}
