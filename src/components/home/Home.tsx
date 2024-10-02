import React from "react";
import * as css from "./home.css";
import { Button_Link } from "../../ui/buttons";

function HomeComponent() {
    return (
        <div className={css.root}>
            <br />
            <div className={css.links}>
                <Button_Link text="Login" to="/login" />
                <Button_Link text="Register" to="/register" />
                <Button_Link text="Visit" to="/visit" />
            </div>
        </div>
    );
}

export { HomeComponent };
