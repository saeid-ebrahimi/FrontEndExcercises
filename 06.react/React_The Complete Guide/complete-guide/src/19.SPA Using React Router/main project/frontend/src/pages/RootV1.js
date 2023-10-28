import React from "react";
import MainNavigation from "../components/MainNavigation";
import {Outlet, useNavigation} from "react-router-dom";

const RootLayout = () => {
    const navigation = useNavigation();

    return <>
    <MainNavigation/>
    <main>
        {navigation.state === "loading" && <p>Loading... </p>}
        <Outlet/>
    </main>
    </>
}
export default RootLayout;