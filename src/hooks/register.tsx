/* Funciones del Resgistro */

import { test_api_register } from "../lib/test_api";

export function useRegister(data) {
    return data.password === data.password_check ? useNewRegister(data) : false;
}

function useNewRegister(data) {
    const api = test_api_register(data);
    return api;
}
