import React from "react";
import * as css from "./index.css";

// export function TextField_Value({ value, onChange }) {
//     return <input value={value} onChange={onChange} className={css.root} />;
// }

// export function TextField_Props({ props }) {
//     return <input {...props} className={css.root} />;
// }

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
