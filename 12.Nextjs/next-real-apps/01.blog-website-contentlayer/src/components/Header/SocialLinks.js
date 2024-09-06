import React from "react";
import {LinkedinIcon,DribbbleIcon, GithubIcon, TwitterIcon} from "@/src/components/Icons";


function SocialLinks(){
    return(
        <div className={"flex items-center"}>
            <a href={"https://example.com"} className={"w-6 h-6 mr-4"}>
                <LinkedinIcon className={"hover:scale-125 transition-all ease duration-200"}/>
            </a>
            <a href={"https://example.com"} className={"w-6 h-6 mr-4"}>
                <TwitterIcon  className={"hover:scale-125 transition-all ease duration-200"} />
            </a>
            <a href={"https://example.com"} className={"w-6 h-6 mr-4"}>
                <GithubIcon   className={"hover:scale-125 transition-all ease duration-200"}/>
            </a>
            <a href={"https://example.com"} className={"w-6 h-6 mr-4"}>
                <DribbbleIcon className={"hover:scale-125 transition-all ease duration-200"}/>
            </a>
        </div>
    )
}
export default SocialLinks;