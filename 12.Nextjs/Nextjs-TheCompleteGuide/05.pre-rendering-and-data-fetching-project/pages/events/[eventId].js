import {getEventById, getFeaturedEvents} from "../../helpers/api-util";
import {Fragment} from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

export default function EventDetailPage(props){


    if (! props.selectedEvent){
        return <div className={"center"}>
            <p>No event found!</p>
        </div>
    }
    const {id, title, date, location, image, description} = props.selectedEvent
    return (
        <div>
            <h1>The Event Detail Page</h1>
            <Fragment>
                <EventSummary title={title}/>
                <EventLogistics date={date} address={location} image={image} imageAlt={title}/>
                <EventContent>
                    <p>{description}</p>
                </EventContent>
            </Fragment>
        </div>
    )
}

export async function getStaticProps(context){
    const {params} = context
    const eventId = params.eventId
    const event = await getEventById(eventId)
    return  {
        props: {
            selectedEvent: event
        },
        revalidate: 60
    }
}

export async function getStaticPaths(context){
    const events = await getFeaturedEvents();
    const paths = events.map(event => ({ params: { eventId: event.id}}))
    return {
        paths: paths,
        fallback: "blocking"
    }
}