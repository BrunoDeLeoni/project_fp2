import React from "react";
import { useData } from "../hooks";

function Item() {
    const results = useData()

    return (
        <div>
            <h5>{results.id}</h5>
            <h5>{results.title}</h5>
            <h5>{results.price}</h5>
        </div>
    );
}

export { Item };
