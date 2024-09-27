import React from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../hooks";
import { MainButton } from "../ui/buttons";
import { TextField_Name } from "../ui/text-field";

function SearchForm() {
    const navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        const query = e.target.query.value;
        navigate("/search/" + query, { replace: true });
    }
    return (
        <form onSubmit={handleSubmit}>
            <TextField_Name name="query" />
            <MainButton>Buscar</MainButton>
            <h5>Resultados: {useSearch().length}</h5>
        </form>
    );
}

export { SearchForm };
