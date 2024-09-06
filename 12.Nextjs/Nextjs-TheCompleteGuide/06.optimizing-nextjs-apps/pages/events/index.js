import {getAllEvents} from "@/helpers/api-util";
import {useRouter} from "next/router";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import {Fragment} from "react";
import Head from "next/head";

export default function EventsPage(props){
    const router = useRouter()
    const {events:allEvents} = props
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    };
    return(
        <Fragment>
            <Head>
                <title>All Events Events</title>
                <meta name={"description"} content={"Find a lot of great events allow you to evolve..."}/>
            </Head>
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