/* Funciones del Resgistro */

import { newUser } from "../lib/api";

export function useRegister(data) {
    return data.userPassword === data.userPassword_check ? newUser(data) : false;
}
