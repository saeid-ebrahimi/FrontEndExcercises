import styled from "styled-components";
import { balanced, primary, typescale, yellow } from "../../utils";

export const Button = styled.button`
    font-size: ${typescale.header5};
    background-color: ${primary[700]};
    text-transform:uppercase;
    color: ${primary[50]};
    padding: 6px 16px;
    border: none;
    border-radius:4px;
    transition: all;
    transition-duration: 300;
    &:hover, &:focus{
        background-color: ${primary[800]}
    }
    &:active{
        background-color: ${primary[600]}
    }
    &:disabled{
        background-color: ${balanced[200]};
        color:${balanced[400]};
        cursor:not-allowed;
    }
    &.large{
        font-size:${typescale.header4};
        padding: 8px 22px;
    }
    &.small{
        font-size: ${typescale.text};
        padding: 4px 10px;
    }
    &.warning{
        background-color: ${yellow[200]};
        color:${balanced[500]};
        &:hover, &:focus{
            background-color: ${yellow[300]}
        }
        &:active{
            background-color: ${yellow[100]}
        }
    }
    
`

