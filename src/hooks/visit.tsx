/* Funciones del Visit */

import { test_api_visit } from "../lib/test_api";

export function useVisit() {
    const api = test_api_visit();
    return api;
}
