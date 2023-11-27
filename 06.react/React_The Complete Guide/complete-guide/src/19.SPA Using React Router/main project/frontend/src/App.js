
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import EventDetailPage, {loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventsRoot";
import {action as manipulateEventAction} from "./components/EventForm";
import NewsletterPage from "./pages/Newsletter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage/>},
      { path: "events", element: <EventRootLayout/> , children: [
          { index: true, element: <EventsPage/>,errorElement: <ErrorPage/> , loader: eventsLoader},
          { path: "new", element: <NewEventPage/>, action: manipulateEventAction},
          { path: ":eventId" ,
              id: "event-detail",
              errorElement: <ErrorPage/> ,
              loader: eventDetailLoader,
              children: [
                  { index: true, element: <EventDetailPage/>, action: deleteEventAction },
                  { path: "edit", element: <EditEventPage/>, action: manipulateEventAction}
              ]}

        ]},
        {
            path: 'newsletter',
            element: <NewsletterPage />,
            // action: newsletterAction,
        },
    ],
  }
])
function App() {
  return  <RouterProvider router={router}>
    <div></div>;
  </RouterProvider>
}

export default App;
