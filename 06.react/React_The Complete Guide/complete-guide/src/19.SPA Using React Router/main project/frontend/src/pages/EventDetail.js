import React, {Suspense} from "react";
import {useRouteLoaderData, json, redirect, defer, Await} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

async function loadEvent(id, request){
    const resp = await fetch('http://localhost:8080/events/'+id, {method: request.method, })
    if (!resp.ok){
        throw json({message: "Could not fetch details for selected event."}, { status: 500})
    }else{
        const resData = await resp.json();
        return resData.event;
    }
}
const loader = async ({request, params}) => {
    const id = params.eventId
    return defer({
        event: await loadEvent(id, request),
        events: loadEvents()
    });
}
const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData("event-detail");
    return <>
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
            <Await resolve={event}>
                {loadedEvent => <EventItem event={loadedEvent}/> }
            </Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>



    </>
}

const loadEvents = async() => {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw json({message: "Could not fetch events."}, { status: 500})
    } else {
        const resData = await response.json();
        return resData.events
    }
}


const action = async ({params}) => {
    const eventId = params.eventId;
    const response = await fetch("http://localhost:8080/events"+ eventId);
    if (!response.ok){
        throw json({message:"Could not delete selected event."}, {status: 500})
    }else{
        return redirect('/events');
    }
}
export default EventDetailPage;
export {loader} ;
export {action}