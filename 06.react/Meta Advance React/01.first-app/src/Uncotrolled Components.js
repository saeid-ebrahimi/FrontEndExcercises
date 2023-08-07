import {useRef} from "react";
// file input type is always uncontrolled , because it's read only
const UncontrolledForm = () => {
    const textInputRef = useRef(null)
    const fileInputRef = useRef(null)
    const handleSubmit =(evt)=> {
        evt.preventDefault()
        const files = fileInputRef.current.files
        const inputValue = textInputRef.current.value
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" ref={textInputRef}/>
            <input type="file" ref={fileInputRef}/>
        </form>
    )
}
export default UncontrolledForm;