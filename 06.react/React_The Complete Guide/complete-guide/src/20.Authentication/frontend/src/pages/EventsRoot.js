import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventRootLayout = () => {
    return <>
        <EventsNavigation/>
        <Outlet/>
    </>
};
export default EventRootLayout;