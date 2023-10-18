
const MyParagraph = props => {
    console.log("MyParagraph Evaluated")
    return <p>{props.children}</p>;
}
export default MyParagraph;