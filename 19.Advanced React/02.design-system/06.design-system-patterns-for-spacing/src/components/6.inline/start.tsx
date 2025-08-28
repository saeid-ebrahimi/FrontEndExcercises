import { InlineBundle } from "../5.inline-bundle/start";
import { Button, Logo, MenuWrapper } from "./components";

export function Menu() {
    return (
        <MenuWrapper>
            <div>
                <div>
                    <Logo />
                </div>
                <InlineBundle gutter={"lg"} justify={"center"} align={"center"}>
                    <span>Books</span>
                    <span>Authors</span>
                    <span>Deals</span>
                    <span>About US</span>
                    <span>Sign In</span>
                </InlineBundle>
                <div>
                    <span>Login</span>
                    <Button>Register</Button>
                </div>
            </div>
        </MenuWrapper>
    )
}