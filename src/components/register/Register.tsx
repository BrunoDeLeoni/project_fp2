import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField_Register } from "../../ui/text-field";
import { Button_Main } from "../../ui/buttons";
import { useRegister } from "../../hooks/register";
import * as css from "./register.css";

function RegisterForm() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {
            username: e.target.username.value,
            userPassword: e.target.userPassword.value,
            userPassword_check: e.target.userPassword_check.value,
            userFullname: e.target.userFullname.value,
            userEmail: e.target.userEmail.value,
        };
        return (await useRegister(data))
            ? navigate("/login", { replace: true })
            : alert("ERR_Registro");
    }

    return (
        <form className={css.root} onSubmit={handleSubmit}>
            <TextField_Register text="Usuario" name="username" type="text" />
            <TextField_Register text="Contraseña" name="userPassword" type="password" />
            <TextField_Register text="Confirma la Contraseña" name="userPassword_check" type="password" />
            <TextField_Register text="Nombre" name="userFullname" type="text" />
            <TextField_Register text="Email" name="userEmail" type="email" />
            <Button_Main text="Registrarse" />
        </form>
    );
}

export { RegisterForm };
