import React from "react";
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";
// import UserSearch from "../state/userSearch";
import UserSearch from "./refs/UserSearch";
import EventComponent from "./events/EventComponent";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
const App = () => {
    return (
        <div>
            <GuestList/>
            <UserSearch/>
            <EventComponent/>
        </div>
    );
};

root.render(<App />);
