// using type prediction: (the other approach is more robust)
import { type ComponentPropsWithoutRef } from "react";


type ButtonProps = {
    href?:never
} & ComponentPropsWithoutRef<"button">

type AnchorProps = {
    href?:never
} & ComponentPropsWithoutRef<"a">

function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps{
    return "href" in props;
}
function Button(props: ButtonProps | AnchorProps) {
    if (isAnchorProps(props))
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