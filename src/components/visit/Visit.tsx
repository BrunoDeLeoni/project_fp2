import React from "react";
import * as css from "./visit.css";
import { useVisit } from "../../hooks/visit";
import { ItemVisit } from "../../ui/items";

function VisitItems() {
    const item = useVisit();
    console.log(item);
    return (
        <div className={css.root}>
            {item.map((r) => (
                <ItemVisit item={r}></ItemVisit>
            ))}
        </div>
    );
}

export { VisitItems };
