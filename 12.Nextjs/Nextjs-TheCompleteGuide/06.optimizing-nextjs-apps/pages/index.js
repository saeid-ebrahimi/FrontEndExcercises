import {getFeaturedEvents} from "@/helpers/api-util";
import EventList from "../components/events/event-list";
import Head from "next/head"

export default function HomePage(props){
    return (
        <div>
            <Head>
                <title>NextJS Events</title>
                <meta name={"description"} content={"Find a lot of great events allow you to evolve..."}/>
            </Head>
            <EventList events={props.events}/>
        </div>
    )
}
export async function getStaticProps(){
    const featuredEvents = await getFeaturedEvents();
    return {
        props: { events: featuredEvents },
        revalidate: 1800
    }
}

