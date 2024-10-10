/************************/
/* REGISTRO DE USUARIOS */
/************************/

/* API -> URL */
const api_remote = "http://192.168.0.200:3000";

/* USER -> NEW */
export function useRegister(data) {
    if (data.userPassword === data.userPassword_check) {
        const response = fetch(api_remote + "/new-user", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                return data; /* TRUE -> NUEVO USUARIO | FALSE -> USUARIO EXISTENTE */
            });
        return response;
    } else {
        return false; /* FALSE -> LA CONTRASEÑAS NO COINCIDEN */
    }
}
