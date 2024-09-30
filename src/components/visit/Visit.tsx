import React from "react";
import * as css from "./visit.css";
import { useVisit } from "../../hooks/visit";

function VisitItems() {
    const item = useVisit();
    return <div>Items</div>;
}

export { VisitItems };
