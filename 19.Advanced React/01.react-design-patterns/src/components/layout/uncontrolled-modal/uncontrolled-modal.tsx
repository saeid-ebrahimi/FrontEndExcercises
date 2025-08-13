import { useState } from "react";
import type { TUncontrolledModalProps } from ".";
import styled from "styled-components";

const ModalBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    overflow: auto;
    background-color: #00000067;
    width:100%;
    height: 1100%;
    z-index:100;
`

const ModalContent = styled.div`
    margin: 12% auto;
    padding:24px;
    background-color: wheat;
    width:50%;
`

export function UncontrolledModal({ children, triggerContent }: TUncontrolledModalProps) {
    const [show, setShow] = useState(false)
    return <>
        <button onClick={() => { setShow(true) }}>{triggerContent}</button>
        {show && <ModalBackground onClick={() => { setShow(false) }} >
            <ModalContent onClick={(evt) => evt.stopPropagation()}>
                {children}
                <button onClick={() => { setShow(false) }}>Close</button>
            </ModalContent>
        </ModalBackground>}
    </>
}