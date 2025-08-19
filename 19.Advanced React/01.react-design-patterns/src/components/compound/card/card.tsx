import type { ICardProps } from ".";
import { Body } from "../body";
import { Footer } from "../footer";
import { Header } from "../header";

export function Card({ children }: ICardProps) {
    return <div style={{ border: "1px solid black" }}>
        {children}
    </div>
}


Card.Header = Header;
Card.Footer = Footer;
Card.Body = Body;

