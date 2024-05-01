import { Paper, Typography, Grid } from '@mui/material';

const EventsList = ({ events }) => {
    if (events.length === 0) {
        return <div>No events available</div>;
    }

    return (
        <div>
            {events.map((event, index) => (
                <Paper key={index} elevation={3} style={{ marginBottom: '20px', padding: '20px', backgroundColor: '#231F42' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <div style={{
                                display: 'inline-block',
                                width: '66px',
                                height: '66px',
                                border: '1px solid white',
                                borderRadius: '5px',
                                textAlign: 'center',
                                lineHeight: '40px',
                                backgroundColor: 'transparent',
                            }}>
                                <Typography variant="subtitle1">{event.when.date.substring(0, 6)}</Typography>
                            </div>
                        </Grid>

                        <Grid item container xs={6} spacing={1}>
                            <Grid item xs={12}>
                                <Typography variant="h6">{event.name}</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="body1">{event.where}</Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2">
                                    {event.when.from} - {event.when.to}
                                </Typography>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography variant="body2" style={{ textAlign: 'right' }}>
                                    {event.price} sek
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            ))}
        </div>
    );
};

export default EventsList;