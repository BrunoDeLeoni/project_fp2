import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRouters } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
    <RecoilRoot>
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <AppRouters />
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>,
    document.querySelector(".root")
);
