import React from "react";
import {  useState } from 'react';
import {useLoaderData} from "react-router-dom";

import EventsList from '../components/EventsList';

function EventsPage() {
    const loadedData = useLoaderData();
    return <EventsList events={loadedData} />
}

export default EventsPage;