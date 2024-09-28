import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h4>webHome</h4>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <Link to="/visit">Visit</Link>
        </div>
    );
}

export { Home };
