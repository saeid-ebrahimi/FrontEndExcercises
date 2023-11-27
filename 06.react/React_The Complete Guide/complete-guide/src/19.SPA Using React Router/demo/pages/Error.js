import React from "react";
import MainNavigation from "../components/MainNavigation";

function ErrorPage(){
    return <>
        <MainNavigation/>
        <main>
            <h1>An Error Occurred!</h1>
            <p>Could not find this page!</p>
        </main>
    </>
}

export default ErrorPage;