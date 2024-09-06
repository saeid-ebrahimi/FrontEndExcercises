
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/EventsV4";
import EventDetailPage, {loader as eventDetailLoader} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import RootErrorPage from "./pages/RootError";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventsRoot";
// import {action as manipulateEventAction} from "./components/EventForm";
import NewsletterPage from "./pages/Newsletter"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <RootErrorPage/>,
    children: [
      { index: true, element: <HomePage/>},
      { path: "events", element: <EventRootLayout/> , children: [
          { index: true, element: <EventsPage/>,errorElement: <ErrorPage/> , loader: eventsLoader},
          { path: "new", element: <NewEventPage/>},
          { path: ":eventId" ,
              // id: "event-detail",
              children: [
                  { index: true, element: <EventDetailPage/>, errorElement: <ErrorPage/> ,
                      loader: eventDetailLoader,},
                  { path: "edit", element: <EditEventPage/>}
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
