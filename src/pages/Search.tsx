import React from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../hooks";
import { ItemLink } from "../ui/links";

function Search() {
    const results = useSearch();

    return (
        <div>
            {results.map((r) => (
                <ItemLink children={r}></ItemLink>
            ))}
        </div>
    );
}

export { Search };
