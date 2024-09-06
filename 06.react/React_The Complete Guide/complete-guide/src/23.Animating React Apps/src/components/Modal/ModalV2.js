import React from 'react';
import './Modal.css';
import Transition from "react-transition-group/Transition";

const animationTiming = {
    enter: 400,
    exit: 600
}
const modal = (props) => {
    return  (
        <Transition in={props.show} timeout={animationTiming} mountOnEnter unmountOnExit>
            { state => (
                <div className={`Modal ${state === "entering"? "ModalOpen": state === "exiting"? "ModalClose": ""}`}>
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            )}
        </Transition>
        )
;
}

export default modal;