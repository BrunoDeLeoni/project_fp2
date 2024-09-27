import React from "react";
import * as css from "./index.css";

export function TextField_Value({ value, onChange }) {
    return <input value={value} onChange={onChange} className={css.root} />;
}

export function TextField_Props({props}) {
    return <input {...props} className={css.root} />;
}

export function TextField_Name({name}) {
    return <input name={name} className={css.root} />;
}
