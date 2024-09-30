import React from "react";
import { LoginForm } from "../components/login/Login";
import { RegisterForm } from "../components/register/Register";

export function Login() {
    return <div>{LoginForm()}</div>;
}

export function Register() {
    return <div>{RegisterForm()}</div>;
}
