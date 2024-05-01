import Header from '../components/Header';
import { SearchInput } from '../styled/Header.styled';
import React, { useState, useEffect } from 'react';
import EventsList from '../components/EventsList';
import axios from 'axios';

function EventsPage() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('https://santosnr6.github.io/Data/events.json');
                setEvents(response.data.events);
                console.log(response.data.events);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents(); 
    }, []);

    return (
        <div>
            <Header title='Events'>
                <SearchInput />
            </Header>
            <EventsList events={events} />
        </div>
    )
}

export default EventsPage