import {Outlet} from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventRootLayout = () => {
    return <>
        <EventsNavigation/>
        <main>
            <Outlet/>
        </main>
    </>
};
export default EventRootLayout;