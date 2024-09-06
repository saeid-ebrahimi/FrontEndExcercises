import { type ComponentPropsWithoutRef } from "react";


type ButtonProps = {
    el:"button"
} & ComponentPropsWithoutRef<"button">

type AnchorProps = {
    el: "anchor"
} & ComponentPropsWithoutRef<"a">


function Button(props: ButtonProps | AnchorProps) {
    if (props.el === "anchor")
    {
         return (
             <p>
                 <a className="button" {...props}>{ props.children}</a>
            </p> 
            )
    }
    
    return (
        <p>
            <button className="button" {...props}>{ props.children}</button>
        </p>
        )
}

export default Button