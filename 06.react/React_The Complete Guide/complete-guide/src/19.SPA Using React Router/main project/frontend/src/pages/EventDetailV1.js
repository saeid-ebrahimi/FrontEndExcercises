import React from "react";
import EventItem from "../components/EventItem";
import {json, redirect, useRouteLoaderData} from "react-router-dom";
export default function EventDetailPage(){
    const data = useRouteLoaderData("event-detail");
    if (data){
        return (
            <EventItem event={data.event} />
        )
    }

}
export async function loader({request, params}){
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`)
    if (!response.ok){
        throw json({message: "Could not fetch details for selected event."}, {status:500})
    }else{
        return response.json();
    }
}

export async function action({params, request}){
    const id = params.eventId;
    const response = await fetch("http://localhost:8080/events/"+id, {method: request.method});
    if (!response.ok){
        throw json({message: "Could not delete event"}, {status: 500})
    }
    return redirect("/events")
}