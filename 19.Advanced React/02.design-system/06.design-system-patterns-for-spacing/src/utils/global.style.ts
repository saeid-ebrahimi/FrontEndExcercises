import { createGlobalStyle } from "styled-components";
import { normalize } from "polished";
export const GlobalStyles = createGlobalStyle`
    ${normalize()}
    html{
        font-size: 1rem;
        box-sizing: border-box;
    }
    *, *::before, *::after{
        box-sizing:inherit;
    }

    body{
        margin: 10px;
    }
`;