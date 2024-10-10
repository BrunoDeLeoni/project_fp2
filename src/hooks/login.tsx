/*********/
/* LOGIN */
/*********/

/* API -> URL */
const api_remote = "http://192.168.0.200:3000";

/* USER -> TOKEN */
export async function useLogin(data) {
    return fetch(api_remote + "/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data === false) {
                return false; /* FALSE => USUARIO INCORRECTO */
            } else {
                return userData(data); /* TOKEN => USUARIO CORRECTO */
            }
        });
}

/* USER -> DATA */
function userData(data) {
    return fetch(api_remote + "/me", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `bearer ${data}`,
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            return data; /* DATOS DEL USUARIO */
        });
}
