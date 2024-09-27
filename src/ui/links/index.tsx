import React from "react";
import { Link } from "react-router-dom";
import * as css from "./index.css";

export function ItemLink({ children }) {
    return (
        <div className={css.root}>
            <Link className={css.link} to={"/Item/" + children.id}>
                <h5>{children.title}</h5>
                <h6>$ {children.price}</h6>
            </Link>
        </div>
    );
}
