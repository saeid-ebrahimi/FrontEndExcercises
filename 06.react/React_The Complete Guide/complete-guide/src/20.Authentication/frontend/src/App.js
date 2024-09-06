import {createBrowserRouter, RouterProvider} from "react-router-dom";

import HomePage from "./pages/Home";
import EventsPage, {loader as eventsLoader} from "./pages/Events";
import EventDetailPage, {action as deleteEventAction , loader as eventDetailLoader} from "./pages/EventDetail";
import NewEventPage from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import RootErrorPage from "./pages/RootError";
import EditEventPage from "./pages/EditEvent";
import EventRootLayout from "./pages/EventsRoot";
import {action as manipulateEventAction} from "./components/EventForm";
import NewsletterPage, {action as newsletterAction} from "./pages/Newsletter"
import AuthenticationPage, {action as authenticationAction} from "./pages/Authentication";
import {action as logoutAction} from "./pages/Logout";
import {tokenLoader, checkTokenLoader} from "./util/auth"
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    errorElement: <RootErrorPage/>,
    id:"root",
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage/>},
      { path: "events", element: <EventRootLayout/> , children: [
          { index: true, element: <EventsPage/>,errorElement: <ErrorPage/> , loader: eventsLoader},
          { path: "new", element: <NewEventPage/>, action: manipulateEventAction, loader: checkTokenLoader },
          { path: ":eventId" ,
              id: "event-detail",
              errorElement: <ErrorPage/>,
              loader: eventDetailLoader,
              children: [
                  { index: true, element: <EventDetailPage/>, action: deleteEventAction},
                  { path: "edit", element: <EditEventPage/>, action: manipulateEventAction, loader: checkTokenLoader }
              ]}

        ]},
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: "auth",
        element: <AuthenticationPage/>,
        action: authenticationAction
      },
      {
        path:"logout",
        action: logoutAction
      }

    ],
  }
])
function App() {
  return  <RouterProvider router={router}>
    <div></div>;
  </RouterProvider>
}

export default App;
