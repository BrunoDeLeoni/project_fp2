/* Funciones del Login */

import { userLogin, userData } from "../lib/api";

export function useLogin(data) {
    const x = userLogin(data);
    console.log("useLogin" + x)
}
