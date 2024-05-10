import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import {
    EventBox,
    DateBox,
    DateText,
    EventName,
    EventWhere,
    EventWhen,
    EventPrice,
    HrLine
} from '../styled/EventsList.styled';
import { PageContainer } from '../styled/PageContainer.styled';

const EventsList = ({ events }) => {

    const eventsWithIds = events.map(event => {
        const name = event.name.replace(/ /g, '-');
        return {
            ...event,
            id: name
        };
    });

    return (
        <PageContainer>
            {eventsWithIds.map((event) => (
                <Link 
                    key={event.id} 
                    to={`/event/${event.id}`}
                    style={{ textDecoration: 'none' }}>
                    <EventBox>
                        <Grid container spacing={2} style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}>
                            <Grid item xs={3}>
                                <DateBox>
                                    <DateText>
                                        {event.when.date.substring(0, 2)}
                                    </DateText>
                                    <DateText>
                                        {event.when.date.substring(2, 6)}
                                    </DateText>
                                </DateBox>
                            </Grid>

                            <Grid item container xs={7} spacing={1}>
                                <Grid item xs={12}>
                                    <EventName>
                                        {event.name}
                                    </EventName>
                                </Grid>
                                <Grid item xs={12}>
                                    <EventWhere>
                                        {event.where}
                                    </EventWhere>
                                </Grid>
                                <Grid item xs={6}>
                                    <EventWhen>
                                        {event.when.from} - {event.when.to}
                                    </EventWhen>
                                </Grid>
                                <Grid item xs={6}>
                                    <EventPrice>
                                        {event.price} sek
                                    </EventPrice>
                                </Grid>
                                <Grid item xs={12}>
                                    <HrLine />
                                </Grid>
                            </Grid>
                        </Grid>
                    </EventBox>
                </Link>
            ))}
        </PageContainer>
    );
};

export default EventsList;
