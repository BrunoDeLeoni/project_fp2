import React from "react";
import { useNavigate } from "react-router-dom";
import { TextField_Register } from "../../ui/text-field";
import { Button_Main } from "../../ui/buttons";
import { useRegister } from "../../hooks/register";
import * as css from "./register.css";

function RegisterForm() {
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            user: e.target.user.value,
            password: e.target.password.value,
            password_check: e.target.password_check.value,
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
        };
        return useRegister(data)
            ? navigate("/login", { replace: true })
            : alert("Contraseña Incorrecta");
    }

    return (
        <form className={css.root} onSubmit={handleSubmit}>
            <TextField_Register text="Usuario" name="user" type="text" />
            <TextField_Register text="Contraseña" name="password" type="password" />
            <TextField_Register text="Confirma la Contraseña" name="password_check" type="password" />
            <TextField_Register text="Nombre" name="name" type="text" />
            <TextField_Register text="Apellido" name="lastname" type="text" />
            <TextField_Register text="Email" name="email" type="email" />
            <TextField_Register text="Telefono" name="phone" type="number" />
            <Button_Main text="Registrarse" />
        </form>
    );
}

export { RegisterForm };
