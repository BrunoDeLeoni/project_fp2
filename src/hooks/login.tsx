/* Funciones del Login */

import { test_api_id, test_api_token } from "../lib/test_api";

export function useLogin(data) {
    return checkToken(data) ? true : false;
}

function checkToken(data) {
    const token = test_api_token(data);
    return token ? checkUser(token) : false;
}

function checkUser(token) {
    const api = test_api_id(token);
    return api ? true : false;
}
