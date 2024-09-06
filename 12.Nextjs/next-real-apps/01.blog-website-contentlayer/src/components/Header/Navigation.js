import Link from "next/link"
import {SunIcon} from "@/src/components/Icons";

const Navigation = () => {
    return (
        <nav className={"w-max h-12 py-3 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center gap-2"}>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/contact"}>Contact</Link>
            <button>
                <SunIcon/>
            </button>
        </nav>
    )
}
export default Navigation;