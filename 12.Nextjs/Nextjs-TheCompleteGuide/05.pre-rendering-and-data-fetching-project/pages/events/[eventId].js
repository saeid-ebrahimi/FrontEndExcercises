import {useRouter} from "next/router";
import {getEventById} from "@/dummy-data";
import {Fragment} from "react";
import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";

export default function EventDetailPage(){
    const router = useRouter();
    const eventId = router.query.eventId;
    const eventData = getEventById(eventId)
    if (!eventData){
        return <ErrorAlert>
            <p>No event found!</p>
        </ErrorAlert>
    }
    const {id, title, date, location, image, description} = eventData
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