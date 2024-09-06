import classes from './EventsNavigation.module.css';
import {NavLink, useRouteLoaderData} from "react-router-dom";


function EventsNavigation() {
  const token = useRouteLoaderData("root");
  const className = ({isActive})=> (isActive ? classes.active: undefined)
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={className} end>All Events</NavLink>
          </li>
          {token &&  <li>
            <NavLink to="/events/new" className={className}>New Event</NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
