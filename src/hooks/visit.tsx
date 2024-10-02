/* Funciones del Visit */

import { useParams } from "react-router-dom";
import { test_api_visit } from "../lib/test_api";
import { useEffect } from "react";
import { atom, selector, useRecoilValue, useSetRecoilState } from "recoil";

const visitState = atom({
    key: "visitState",
    default: "",
});

const visitResults = selector({
    key: "visitResults",
    get: ({ get }) => {
        return test_api_visit();
    },
});

export function useVisit() {
    const params = useParams();
    const item = params.item;

    useEffect(() => {
        setRecoilQuery(item);
    }, [item]);

    const setRecoilQuery = useSetRecoilState(visitState);
    const results = useRecoilValue(visitResults);

    return results;
}
