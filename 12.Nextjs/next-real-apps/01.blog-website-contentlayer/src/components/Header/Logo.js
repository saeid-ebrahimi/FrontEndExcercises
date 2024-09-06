import React from "react";
import Link from "next/link";
import logo from "@/public/logo.png"
import Image from "next/image";
const Logo = () => {
    return (
        <Link href={"/"} className={"flex items-center text-dark"}>
            <div className={"w-16 rounded-full overflow-hidden border border-solid border-dark mr-4"}>
                <Image src={logo} alt={"Saeid"} className={"w-full h-auto rounded-full"}/>
            </div>
            <span className={"font-bold text-xl"}>Saeid Blog</span>
        </Link>
    )
}
export default Logo;