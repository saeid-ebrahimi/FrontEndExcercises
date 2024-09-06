import Link from "next/link";
import classes from "./EventItem.module.css";
const EventItem = ({title, image, date, location, id}) => {
 const humanReadableDate = new Date(date).toLocaleDateString("en-US", { day:"numeric", month: "long", year: "numeric"})
 const formattedAddress = location.replace(", ", "\n");
 const exploreLink = `/events/${id}`
 return <li className={classes.item}>
    <img src={"/" + image} alt={title}/>
  <div className={classes.content}>
   <div className={""}>
    <h2>{title}</h2>
    <div>
     <time>{humanReadableDate}</time>
    </div>
    <div>
     <address>{formattedAddress}</address>
    </div>
   </div>
   <div>
      <Link href={exploreLink}>Explore Event</Link>
   </div>
  </div>
 </li>
}

export default EventItem;