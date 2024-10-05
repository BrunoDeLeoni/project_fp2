// const api_remote = process.env.CONNECTION_API;
const api_remote = "http://192.168.0.200:3000";

/* API */

export function test(data?) {
    return true;
}

/* User: Crear un nuevo usuario */
function newUser(data) {
    return fetch(api_remote + "/new-user", {
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
            return data;
        });
}

/* User: Login */
function userLogin(dataUser) {
    return fetch(api_remote + "/login", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(dataUser),
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            if (data === false) {
                return false;
            } else {
                const x = userData(data)
                console.log("userLogin" + x)
            }
        });
}

/* User: Mis datos */
function userData(token) {
    return fetch(api_remote + "/me", {
        method: "GET",
        headers: {
            "content-type": "application/json",
            Authorization: `bearer ${token}`,
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data)
            return data;
        });
}

export { newUser, userLogin, userData };
