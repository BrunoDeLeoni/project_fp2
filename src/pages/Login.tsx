import React from "react";
import { Link } from "react-router-dom";

export function Login() {
    
    return (
        <div>
            <h4>webLogin</h4>
            <Link to="/dashboard">Log In</Link>
        </div>
    );
}

export function Register() {
    
    return (
        <div>
            <h4>webRegister</h4>
        </div>
    );
}