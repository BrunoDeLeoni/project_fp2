import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField_Login } from "../../ui/text-field";
import { Button_Main } from "../../ui/buttons";
import { useLogin } from "../../hooks/login";
import * as css from "./login.css";

function LoginForm() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            userPassword: e.target.userPassword.value,
        };

        const x = useLogin(data);
        // console.log(x);

        // return useLogin(data)
        //     ? navigate("/dashboard", { replace: true })
        //     : alert("Usuario/Contraseña Incorrectas");
    }

    return (
        <form className={css.root} onSubmit={handleSubmit}>
            <TextField_Login text="Username" name="username" type="user" />
            <TextField_Login
                text="Password"
                name="userPassword"
                type="password"
            />
            <Button_Main text="Login" />
        </form>
    );
}

export { LoginForm };
