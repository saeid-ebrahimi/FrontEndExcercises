import {getAllEvents} from "@/dummy-data";
import {useRouter} from "next/router";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import {Fragment} from "react";

export default function EventsPage(){
    const router = useRouter()
    const allEvents = getAllEvents()
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    };
    return(
        <Fragment>
            <EventsSearch onSearch={findEventsHandler}/>
            <EventList events={allEvents}/>
        </Fragment>
    )
}