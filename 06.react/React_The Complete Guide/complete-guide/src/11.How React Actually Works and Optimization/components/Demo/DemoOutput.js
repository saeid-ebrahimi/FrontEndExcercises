import React from "react";
import MyParagraph from "./MyParagraph";
const DemoOutput = (props) => {
    console.log("DEMO Evaluated")
    return <MyParagraph>{props.show ? "this is new!": ""}</MyParagraph>;
}
export default DemoOutput;