import React from 'react';
import './Modal.css';
import CSSTransition from "react-transition-group/CSSTransition";

const animationTiming = {
    enter: 400,
    exit: 600
}
const modal = (props) => {
    return  (
        <CSSTransition
            in={props.show}
            timeout={animationTiming}
            mountOnEnter
            unmountOnExit
            classNames={{
                enter:"",
                enterActive:"ModalOpen",
                exit:"",
                exitActive: "ModalClose",
                appear: "",
                appearActive: ""
            }}
        >
            <div className={`Modal`}>
                <h1>A Modal</h1>
                <button className="Button" onClick={props.closed}>Dismiss</button>
            </div>

        </CSSTransition>
        )
;
}

export default modal;