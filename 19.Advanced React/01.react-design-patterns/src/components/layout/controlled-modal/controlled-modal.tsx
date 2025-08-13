
import styled from "styled-components";
import type { IControlledModalProps } from "./controlled-modal.types";

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

export function ControlledModal({ shouldDisplay, onClose, children }: IControlledModalProps) {
    return <>
        {shouldDisplay && <ModalBackground onClick={onClose} >
            <ModalContent onClick={(evt) => evt.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </ModalContent>
        </ModalBackground>}
    </>
}