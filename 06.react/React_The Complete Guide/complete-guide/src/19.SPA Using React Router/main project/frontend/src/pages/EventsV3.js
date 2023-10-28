import React from "react";
import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const data = useLoaderData()
    if (data.isError){
        return <p>{data.message}</p>
    }
    return <EventsList events={data}/>
}
const loader = async() => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        return { isError: true, message: "Could not fetch events."}
    } else {
        const resData = await response.json();
        return resData.events
    }
}
export default EventsPage;
export {loader} ;