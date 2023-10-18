import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (props) => {
    console.log("DEMO Evaluated")
    return <MyParagraph>{props.show ? "this is new!": ""}</MyParagraph>;
}
export default React.memo(DemoOutput); // to avoid re-evaluation of child when props don't change