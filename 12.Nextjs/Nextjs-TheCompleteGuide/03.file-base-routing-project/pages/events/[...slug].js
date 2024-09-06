import {getFilteredEvents} from "@/dummy-data";
import {useRouter} from "next/router";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import {Fragment} from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
export default function FilteredEventsPage(){
    const router = useRouter();
    const filteredData = router.query.slug;
    if (!filteredData){
        return <h3 className={"center"}>Loading...</h3>
    }
    if (filteredData.length === 2){
        const filteredYear = filteredData[0];
        const filteredMonth = filteredData[1];

        const numYear = +filteredYear;
        const numMonth = +filteredMonth;

        if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12){
            return (<Fragment>
                <div className={"center"}>
                    <ErrorAlert>
                        <p>Invalid filter, Please adjust your values!</p>
                    </ErrorAlert>
                    <Button link={"/events"}>Show All Events</Button>
                </div>
            </Fragment>
            )
        }
        const filteredEvents = getFilteredEvents({year:numYear, month:numMonth})
        if (!filteredEvents || filteredEvents.length === 0){
            return <Fragment>
                <div className={"center"}>
                    <ErrorAlert>
                        <p>No event for the chosen filter exist!</p>
                    </ErrorAlert>
                    <Button link={"/events"}>Show All Events</Button>
                </div>
            </Fragment>
        }
        const date = new Date(numYear,numMonth)
        return(
            <Fragment>
                <ResultsTitle date={date} />
                <EventList events={filteredEvents}/>
            </Fragment>
        )
    }else{
        return <Fragment>
            <div className={"center"}>
                <ErrorAlert>
                    <p>cannot not find selected event!</p>
                </ErrorAlert>
                <Button link={"/events"}>Show All Events</Button>
            </div>
        </Fragment>
    }

}