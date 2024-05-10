import Header from '../components/Header';
import { SearchInput } from '../styled/Header.styled';
import { useEffect } from 'react';
import EventsList from '../components/EventsList';
import useEventStore from '../stores/eventStore';
import { StyledButton } from '../styled/Button.styled';
import { useNavigate } from 'react-router-dom';

function EventsPage() {
    const fetchEvents = useEventStore(state => state.fetchEvents);
    const events = useEventStore(state => state.events);

    const navigate = useNavigate();

    const selectedEvents = useEventStore(state => state.selectedEvents);
    const ticketQuantities = useEventStore(state => state.ticketQuantities);

    useEffect(() => {
        fetchEvents();
    }, [fetchEvents]);

    return (
        <div>
            <Header title='Events'>
                <SearchInput />
            </Header>
            <EventsList events={events} />
            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' 
                }}>
                <StyledButton
                    variant="contained"
                    onClick={() => navigate('/order', { state: { selectedEvents, ticketQuantities } })}>
                    Till varukorgen
                </StyledButton>
            </div>
        </div>
    )
}

export default EventsPage