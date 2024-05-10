import { Box, Card, CardContent, Typography } from '@mui/material';
import JsBarcode from 'jsbarcode';
import useEventStore from '../stores/eventStore';
import { useEffect, useState } from 'react';

function TicketsPage() {
    const [ticketIds, setTicketIds] = useState([]);

    const { selectedEvents, ticketQuantities } = useEventStore(state => ({
        selectedEvents: state.selectedEvents,
        ticketQuantities: state.ticketQuantities
    }));

    const generateSection = () => {
        const sections = ['A', 'B', 'C', 'D', 'E'];
        return sections[Math.floor(Math.random() * sections.length)];
    };

    const section = generateSection();

    const [lastSeatNumbers, setLastSeatNumbers] = useState({});
    const [seats, setSeats] = useState({});

    useEffect(() => {
        const newSeats = {};
        const newLastSeatNumbers = {};

        selectedEvents.forEach((selectedEvent) => {
            const eventSeats = Array.from({ length: ticketQuantities[selectedEvent.name] || 0 }).map((_, ticketIndex) => {
                if (!newLastSeatNumbers[selectedEvent.id]) {
                    const startingSeat = Math.floor(Math.random() * 100) + 1;
                    newLastSeatNumbers[selectedEvent.id] = startingSeat;
                    return startingSeat;
                }

                const newSeatNumber = newLastSeatNumbers[selectedEvent.id] + 1;
                newLastSeatNumbers[selectedEvent.id] = newSeatNumber;
                return newSeatNumber;
            });

            newSeats[selectedEvent.id] = eventSeats;
        });

        setLastSeatNumbers(newLastSeatNumbers);
        setSeats(newSeats);
    }, [selectedEvents, ticketQuantities]);

    useEffect(() => {
        const newTicketIds = {};
        Object.keys(seats).forEach(eventId => {
            newTicketIds[eventId] = seats[eventId].map(() => Math.random().toString(36).substring(2, 7).toUpperCase());
        });
        setTicketIds(newTicketIds);
    }, [seats]);

    useEffect(() => {
        Object.keys(ticketIds).forEach(eventId => {
            ticketIds[eventId].forEach(ticketId => {
                const svgElement = document.getElementById(`barcode-${ticketId}`);
                if (svgElement) {
                    JsBarcode(svgElement, ticketId, {
                        background: "rgba(0, 0, 0, 0)"
                    });
                } else {
                    console.error(`'barcode-${ticketId}' not found`);
                }
            });
        });
    }, [ticketIds]);

    useEffect(() => {
        document.body.classList.add('tickets-page');

        return () => {
            document.body.classList.remove('tickets-page');
        };
    }, []);

    return (
        <div>
            {selectedEvents.length > 0 ? (
                selectedEvents.map((selectedEvent) => (
                    selectedEvent && (seats[selectedEvent.id] || []).map((seat, ticketIndex) => {
                        const ticketId = ticketIds[selectedEvent.id] 
                        ? ticketIds[selectedEvent.id][ticketIndex] : undefined;

                        if (!ticketId) {
                            return null; 
                        }

                        return (
                            <Card 
                                key={`${selectedEvent.id}-${ticketIndex}`}
                                style={{ 
                                    width: '80%', 
                                    margin: '20px auto' 
                                }}>
                                <CardContent style={{ padding: '0' }}>
                                    <Box
                                        sx={{ 
                                            padding: '10px', 
                                            backgroundColor: '#FFFFFF', 
                                            width: '100%', 
                                            borderBottom: '1px dotted #000' 
                                        }}>
                                        <Typography 
                                            color="textSecondary" 
                                            style={{ 
                                                fontFamily: 'Fira sans', 
                                                fontSize: '10px', 
                                                color: 'rgba(0, 0, 0, 0.4)' 
                                            }}>
                                            WHAT
                                        </Typography>
                                        <Typography 
                                            color="textSecondary" 
                                            style={{ 
                                                padding: '8px 0 8px', 
                                                fontFamily: 'Sansita one', 
                                                fontSize: '26px', 
                                                color: '#F56B9A' }}>
                                            {selectedEvent.name}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{ 
                                            backgroundColor: 'rgba(0, 0, 0, 0.03)', 
                                            width: '100%', 
                                            p: 1, 
                                            borderBottom: '1px dotted #000' 
                                        }}>
                                        <Typography 
                                            color="textSecondary" 
                                            style={{ 
                                                fontFamily: 'Fira sans', 
                                                fontSize: '10px', 
                                                color: 'rgba(0, 0, 0, 0.4)' 
                                            }}>
                                            WHERE
                                        </Typography>
                                        <Typography 
                                            color="textSecondary" 
                                            style={{ 
                                                padding: '8px 0 8px', 
                                                fontFamily: 'Fira sans', 
                                                fontSize: '18px', 
                                                color: 'rgba(0, 0, 0, 0.7)' 
                                            }}>
                                            {selectedEvent.where}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{ 
                                            backgroundColor: 'rgba(0, 0, 0, 0.06)', 
                                            display: 'flex', 
                                            justifyContent: 'space-between', 
                                            width: '100%', 
                                            borderBottom: '1px dotted #000' 
                                        }}>
                                        <Box 
                                            style={{ 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'space-between', 
                                                padding: '0 0 0 10px', 
                                                textAlign: 'left', 
                                                flex: 1 
                                            }}>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 0 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '10px', 
                                                    color: 'rgba(0, 0, 0, 0.4)' 
                                                }}>
                                                WHEN
                                            </Typography>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 8px 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '18px', 
                                                    color: 'rgba(0, 0, 0, 0.7)' 
                                                }}>
                                                {selectedEvent.when?.date.substring(0, 6)}
                                            </Typography>
                                        </Box>
                                        <Box 
                                            style={{ 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'space-between', 
                                                padding: '0 0 0 10px', 
                                                textAlign: 'left', 
                                                borderLeft: '1px dotted #000', 
                                                flex: 1 
                                            }}>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 0 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '10px', 
                                                    color: 'rgba(0, 0, 0, 0.4)' 
                                                }}>
                                                FROM
                                            </Typography>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 8px 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '18px', 
                                                    color: 'rgba(0, 0, 0, 0.7)' 
                                                }}>
                                                {selectedEvent.when?.from}
                                            </Typography>
                                        </Box>
                                        <Box 
                                            style={{ 
                                                display: 'flex', 
                                                flexDirection: 'column', 
                                                justifyContent: 'space-between', 
                                                padding: '0 0 0 10px', 
                                                textAlign: 'left', 
                                                borderLeft: '1px dotted #000', 
                                                flex: 1 
                                            }}>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 0 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '10px', 
                                                    color: 'rgba(0, 0, 0, 0.4)' 
                                                }}>
                                                TO
                                            </Typography>
                                            <Typography 
                                                color="textSecondary" 
                                                style={{ 
                                                    padding: '8px 0 8px 0', 
                                                    fontFamily: 'Fira sans', 
                                                    fontSize: '18px', 
                                                    color: 'rgba(0, 0, 0, 0.7)' 
                                                }}>
                                                {selectedEvent.when?.to}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box
                                        sx={{ 
                                            backgroundColor: 'rgba(0, 0, 0, 0.09)', 
                                            width: '100%', 
                                            p: 1, 
                                            borderBottom: '1px dotted #000' 
                                        }}>
                                        <Typography 
                                            variant="body2" 
                                            component="p" 
                                            style={{ 
                                                padding: '0 0 0 4px', 
                                                fontFamily: 'Fira sans', 
                                                fontSize: '10px', 
                                                color: 'rgba(0, 0, 0, 0.4)' 
                                            }}>
                                            INFO
                                        </Typography>
                                        <Typography 
                                            variant="body2" 
                                            component="p" 
                                            style={{ 
                                                padding: '8px 0 8px 4px', 
                                                fontFamily: 'Fira sans', 
                                                fontSize: '12px', 
                                                color: 'rgba(0, 0, 0, 0.6)' 
                                            }}>
                                            Section {section} - seat {seat}
                                        </Typography>
                                    </Box>
                                    <div 
                                        style={{ 
                                            display: 'flex', 
                                            justifyContent: 'center', 
                                            alignItems: 'center', 
                                            backgroundColor: 'rgba(0, 0, 0, 0.12)' 
                                        }}>
                                        <svg id={`barcode-${ticketId}`}></svg>
                                    </div>
                                </CardContent>
                            </Card>
                        );
                    })
                ))
            ) : (
                <Typography 
                    variant="h6" 
                    style={{
                        textAlign: 'center',
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: '#FFFFFF',
                        fontFamily: 'Fira Sans',
                        fontSize: '18px'
                    }}>
                    Du har inga biljetter än
                </Typography>
            )}
        </div>
    );
}

export default TicketsPage;