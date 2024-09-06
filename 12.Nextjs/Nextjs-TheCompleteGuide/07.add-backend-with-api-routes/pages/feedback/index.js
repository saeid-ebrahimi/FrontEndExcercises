import {buildFeedbackPath, extractFeedback} from "@/pages/api/feedback";
import {Fragment, useState} from "react";

function FeedbackPage(props){
    const [feedbackData, setFeedbackData] = useState()
    const loadFeedbackHandler = (id) => {
        fetch(`/api/${id}`)
            .then(response => response.json())
            .then(data => {setFeedbackData(data)})
    }

    return <Fragment>
        {feedbackData && <p>{feedbackData.email}</p>}
        <ul>
            {props.feedbackItems.map( item => <li key={item.id}>{item.text} <button onClick={loadFeedbackHandler.bind(null, item.id)}>Show Details</button></li>)}
        </ul>
    </Fragment>
}
export async function getStaticProps(context){
    const filePath = buildFeedbackPath();
    const data = extractFeedback(filePath);
    return {
        props: {
            feedbackItems: data,
        }
    }
}
export default FeedbackPage;