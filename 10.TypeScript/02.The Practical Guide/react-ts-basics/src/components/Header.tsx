import { type ReactNode } from "react";

type HeaderProps = {
    children: ReactNode;
    image: {
        src: string;
        alt: string;
    };
}
export default function Header({image, children}: HeaderProps) {
    return <header>
        <img {...image} />
        {children}
    </header>
}

import { type FC, type PropsWithChildren } from "react";
type Header2Props = PropsWithChildren<
    {
        image: {
        src: string;
        alt: string;
    }
}>
    
export const Header2:FC<Header2Props> = ({image, children}) => {

    return (
        <header>
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image} />
            {children}
        </header>
    )
}