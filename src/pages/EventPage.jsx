import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';
import Header from '../components/Header';
import { SubTitle } from '../styled/Header.styled';
import useEventStore from '../stores/eventStore';

function EventPage() {
    const { id } = useParams();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [ticketQuantities, setTicketQuantities] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const fetchEvents = useEventStore(state => state.fetchEvents);

    useEffect(() => {
        const storedQuantities = localStorage.getItem('ticketQuantities');
        if (storedQuantities) {
            setTicketQuantities(JSON.parse(storedQuantities));
        }

        const fetchEvent = async () => {
            setIsLoading(true);
            try {
                const fetchedEvents = await fetchEvents();
                const selectedEvent = fetchedEvents.find(event => event.name.replace(/ /g, '-') === id);
                setSelectedEvent(selectedEvent);
            } catch (error) {
                console.error('Error fetching event:', error);
            }
            setIsLoading(false);
        };

        fetchEvent();
    }, [fetchEvents, id]);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const handleIncrement = () => {
        if (!ticketQuantities[selectedEvent.name] || ticketQuantities[selectedEvent.name] < 10) {
            setTicketQuantities(prevQuantities => {
                const newQuantities = {
                    ...prevQuantities,
                    [selectedEvent.name]: (prevQuantities[selectedEvent.name] || 0) + 1
                };
                localStorage.setItem('ticketQuantities', JSON.stringify(newQuantities));
                return newQuantities;
            });
        }
    };

    const handleDecrement = () => {
        if (ticketQuantities[selectedEvent.name] && ticketQuantities[selectedEvent.name] || 0) {
            setTicketQuantities(prevQuantities => {
                const newQuantities = {
                    ...prevQuantities,
                    [selectedEvent.name]: prevQuantities[selectedEvent.name] - 1
                };
                localStorage.setItem('ticketQuantities', JSON.stringify(newQuantities));
                return newQuantities;
            });
        }
    };

    return (
        <div>
            <Header title='Event'>
                <SubTitle style={{ textAlign: 'center' }}>You are about to score 
                    <br></br>some tickets to</SubTitle>
            </Header>
            <EventItem 
                selectedEvent={selectedEvent} 
                handleDecrement={handleDecrement} 
                handleIncrement={handleIncrement} 
                ticketQuantities={ticketQuantities}/>
        </div>
    )
}

export default EventPage