import React from "react";
import EventsList from '../components/EventsList';
import {useLoaderData} from "react-router-dom";

function EventsPage() {
    const data = useLoaderData()

    return <EventsList events={data}/>
}
const loader = async() => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // throw { message: "Could not fetch events."}
        throw new Response(JSON.stringify({message: "Could not fetch events.",  status: 500}),)
    } else {
        const resData = await response.json();
        return resData.events
    }
}
export default EventsPage;
export {loader} ;