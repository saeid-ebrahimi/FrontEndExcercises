import React from "react";
import Logo from "@/src/components/Header/Logo";
import Navigation from "@/src/components/Header/Navigation";
import SocialLinks from "@/src/components/Header/SocialLinks";
const Header = () => {
    return (
        <header className={"w-full p-4 px-10 flex items-center justify-between fixed top-4 left-0 bg-light/80 backdrop-blur-sm"}>
            <Logo/>
            <Navigation/>
            <SocialLinks/>
        </header>
    )
}
export default Header;