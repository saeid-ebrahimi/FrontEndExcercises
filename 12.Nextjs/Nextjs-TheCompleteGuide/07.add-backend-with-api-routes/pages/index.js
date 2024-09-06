import  {useRef, useState} from "react"
import feedback from "@/pages/api/feedback";
function HomePage() {
    const [feedbacks, setFeedbacks] = useState([])
    const emailInputRef = useRef()
    const feedbackInputRef = useRef()
    function submitFormHandler(event){
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value
        const enteredFeedback = feedbackInputRef.current.value
        const reqBody = {email:enteredEmail, text:enteredFeedback}
        // console.log(reqBody)
        fetch("/api/feedback", {method: "POST", body:JSON.stringify(reqBody), headers: { 'Context-Type': 'application.json'}})
            .then(response => response.json())
            .then(data => console.log(data))
    }
    function loadFeedbackHandler(){
        fetch("/api/feedback")
            .then(resp => resp.json())
            .then(data => {setFeedbacks(data.feedback)})
    }
  return (
    <div>
      <h1>The Home Page</h1>
        <form onSubmit={submitFormHandler}>
            <div>
                <label htmlFor="email">Your Email Address</label>
                <input type="email" id={"email"} ref={emailInputRef}/>
            </div>
            <div>
                <label htmlFor={"feedback"}>Your feedback </label>
                <textarea name="feedback" id="feedback" cols="30" rows="10" ref={feedbackInputRef}></textarea>
            </div>
            <button>Send Feedback</button>
        </form>
        <hr/>
        <button onClick={loadFeedbackHandler}>Load Feedback</button>
        <ul>
            {feedbacks.map(item => <li key={item.id}>{item.email} - {item.text}</li>)}
        </ul>
    </div>
  );
}

export default HomePage;
