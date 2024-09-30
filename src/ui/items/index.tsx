import React from "react";
import * as css from "./index.css";

export function ItemVisit({ item }) {
    return (
        <div className={css.root}>
            <h6>{item.petPhoto}</h6>
            <h5>{item.petName}</h5>
            <h6>{item.petInfo}</h6>
        </div>
    );
}
