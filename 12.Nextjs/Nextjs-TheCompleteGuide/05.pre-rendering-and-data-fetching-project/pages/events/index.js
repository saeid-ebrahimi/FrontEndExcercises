import {getAllEvents} from "@/helpers/api-util";
import {useRouter} from "next/router";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import {Fragment} from "react";

export default function EventsPage(props){
    const router = useRouter()
    const {events:allEvents} = props
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
export async function getStaticProps(){
    const events = await getAllEvents();
    return {
        props: {
            events: events
        },
        revalidate: 90
    }
}