import React from 'react';

import './Backdrop.css';

const backdrop = (props) => {
    const cssClasses = ["Backdrop", props.show ? "BackdropOpen" : "BackdropClose"];
    return <div className={cssClasses.join(" ")}></div>;
};

export default backdrop;