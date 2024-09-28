import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { AppRouters } from "./router";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { Loading } from "./components/Loading/Loading";

ReactDOM.render(
    <RecoilRoot>
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <AppRouters />
            </BrowserRouter>
        </Suspense>
    </RecoilRoot>,
    document.querySelector(".root")
);
