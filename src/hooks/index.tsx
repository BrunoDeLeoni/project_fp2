import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

export const queryState = atom({
    key: "query",
    default: "",
});

export const resultsQueryState = selector({
    key: "searchResutls",
    get: async ({ get }) => {
        const valueQuery = get(queryState);
        if (valueQuery) {
            const response = await fetch(
                "https://api.mercadolibre.com/sites/MLA/search?q=" + valueQuery
            );
            const json = await response.json();
            return json.results;
        } else {
            return [];
        }
    },
});

export const idState = atom({
    key: "id",
    default: "",
});

export const dataIdState = selector({
    key: "searchData",
    get: async ({ get }) => {
        const valueId = get(idState);
        if (valueId) {
            const response = await fetch(
                "https://api.mercadolibre.com/items/" + valueId
            );
            const json = await response.json();
            return json;
        } else {
            return [];
        }
    },
});

export function useSearch() {
    const params = useParams();
    const query = params.query;

    useEffect(() => {
        setRecoilQuery(query);
    }, [query]);

    const setRecoilQuery = useSetRecoilState(queryState);
    const results = useRecoilValue(resultsQueryState);

    return results;
}

export function useData() {
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        setRecoilId(id);
    }, [id]);

    const setRecoilId = useSetRecoilState(idState);
    const results = useRecoilValue(dataIdState);

    return results;
}
