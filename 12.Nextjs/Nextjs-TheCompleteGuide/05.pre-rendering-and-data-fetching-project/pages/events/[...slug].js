import {getFilteredEvents} from "@/helpers/api-util";
import {useRouter} from "next/router";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import {Fragment, useEffect, useState} from "react";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import useSWR from "swr";
export default function FilteredEventsPage(props){
    const router = useRouter();
    const filteredData = router.query.slug;
    const [loadedEvents, setLoadedEvents] = useState(props.events)
    const {data, error} = useSWR('https://nextjs-course-project1-64bac-default-rtdb.firebaseio.com/events.json');
    useEffect(()=>{
        if (data){
            const events = [] ;
            for (const key in data){
                events.push({
                    id:key,
                    ...data[key]
                })
            }
            setLoadedEvents(events)
        }
    }, [data])
    if (props.isLoading || !filteredData || !loadedEvents){
        return <h3 className={"center"}>Loading...</h3>
    }
    if (filteredData.length === 2){
        const filteredYear = filteredData[0];
        const filteredMonth = filteredData[1];

        const numYear = +filteredYear;
        const numMonth = +filteredMonth;
        if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12 || error){
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
        const filteredEvents = loadedEvents.filter((event) => {
            const eventDate = new Date(event.date);
            return eventDate.getFullYear() === numYear && eventDate.getMonth() === numMonth - 1;
        });


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
    }
    else{
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

// export async function getServerSideProps(context){
//     const {params} = context
//     const filterData = params.slug;
//     if (!filterData){
//         return {
//             props: {isLoading:true}
//         }
//     }
//
//     const filteredYear = filterData[0]
//     const filteredMonth = filterData[1]
//
//     const numYear = +filteredYear;
//     const numMonth = +filteredMonth;
//     if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
//         return {
//             props: { hasError:true}
//             // notFound:true,
//             // redirect: {
//             //     destination: "/error"
//             // }
//         }
//     }
//     const filteredEvents = await getFilteredEvents({year:numYear, month:numMonth})
//     const date = new Date(numYear,numMonth)
//     return {
//         props: {events:filteredEvents, date:date}
//     }
// }