import React, {Suspense} from "react";
import EventsList from '../components/EventsList';
import {useLoaderData, json, defer, Await} from "react-router-dom";

const loadEvents = async() => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({message: "Could not fetch events."}, { status: 500})
    } else {
        const resData = await response.json();
        return resData.events
    }
}
function EventsPage() {
    const {events} = useLoaderData();
    return <>
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => (<EventsList events={loadedEvents}/>)}
        </Await>

        </Suspense>
    </>
}
const loader = () => {
    defer({
        events: loadEvents(),
    })
}
export default EventsPage;
export {loader} ;