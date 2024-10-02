import React from "react";
import * as css from "./index.css";

export function ItemVisit({ item }) {
    return (
        <div className={css.root}>
            <h6 className={css.photo}>{item.petPhoto}</h6>
            <h5 className={css.name}>{item.petName}</h5>
            <h6 className={css.info}>{item.petInfo}</h6>
        </div>
    );
}
