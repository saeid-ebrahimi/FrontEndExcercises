import EventItem from "@/components/events/event-item";
import classes from "./event-list.module.css";
export default function EventList({events}) {
    return (
        <ul className={classes.list}>
            {events.map(event => <EventItem key={event.id} id={event.id} title={event.title} date={event.date} location={event.location} image={event.image} />)}
        </ul>
    )
}