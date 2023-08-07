import {useState} from "react";

const ControlledForm = () => {
    const [name, setName] = useState("")
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    const handleChange = (evt) => {
        setName(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        if (Number(score) <=5 && comment.length <= 10){
            alert("Please Provide a comment explaining why the exprience was poor.")
            return
        }
        setName("")
        setScore("10")
        setComment("")
        console.log("Form Submitted")
    }
    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <h2>Feedback from</h2>
                <div className="Field">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        placeholder={"Name"}
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleChange}
                    />
                </div>
                <div className="Field">
                    <label htmlFor="score">Score {score}⭐</label>
                    <input
                        type="range"
                        min={"0"}
                        max={"10"}
                        value={score}
                        name={"score"}
                        id={"score"}
                        onChange={evt => setScore(evt.target.value)}
                    />
                </div>
                <div className="Field">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                        name="comment"
                        id="comment"
                        cols="30"
                        rows="10"
                        value={comment}
                        onChange={evt=> setComment(evt.target.value)}
                    ></textarea>
                </div>
                <button disabled={!name} type={"submit"}>Submit</button>
            </fieldset>
        </form>
    )
}
export default ControlledForm;