import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import { Typography, Table, TableBody, TableContainer, Button } from '@mui/material';
import { BiggerTableWrapper, StyledTableCell, StyledTableRow } from '../styled/Table.styled';
import { StyledButton } from '../styled/Button.styled';
import useEventStore from '../stores/eventStore';

function OrderPage() {
    const { setQuantity } = useEventStore();
    const navigate = useNavigate();

    const { selectedEvents, ticketQuantities } = useEventStore(state => ({
        selectedEvents: state.selectedEvents,
        ticketQuantities: state.ticketQuantities,
    }));
    const selectedEvent = JSON.parse(localStorage.getItem('selectedEvent'));

    const goToTicketItem = () => {
        navigate('/tickets', { state: { event: selectedEvent } });
    };

    const handleIncrement = (eventName) => {
        const currentQuantity = ticketQuantities[eventName] || 0;
        if (currentQuantity < 10) {
            setQuantity(eventName, currentQuantity + 1);
        }
    };
    
    const handleDecrement = (eventName) => {
        const currentQuantity = ticketQuantities[eventName] || 0;
        if (currentQuantity > 0) {
            setQuantity(eventName, currentQuantity - 1);
        }
    };

    const totalPrice = selectedEvents.reduce((total, event) => {
        return total + event.price * ticketQuantities[event.name];
    }, 0);

if ((!selectedEvents || !ticketQuantities || totalPrice === 0) && 
    !selectedEvents.some(event => event.id === "ZAsn9ZXFxWTXDE5TCy8Z7aUB" 
    && ticketQuantities[event.name] > 0)) {
    return <Typography
        style={{ textAlign: 'center',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#FFFFFF',
        fontFamily: 'Fira Sans',
        fontSize: '18px'
    }}>Du har inte valt någon händelse</Typography>;
}

    return (
        <div style={{ padding: '0 11px' }}>
            <Header title='Order'>
            </Header>

            {selectedEvents.map((event) => (
                ticketQuantities[event.name] > 0 && (
                <BiggerTableWrapper key={event.id}>
                    <TableContainer style={{ borderRadius: '3px' }}>
                        <Table>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCell colSpan={3}>
                                        <Typography
                                            style={{
                                                fontSize: '24px',
                                                color: '#F56B9A',
                                                fontFamily: 'Sansita One',
                                                textAlign: 'left',
                                                padding: '3px 10px'
                                            }}>{event.name}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontSize: '14px',
                                                color: '#37AEAB',
                                                fontFamily: 'Fira Sans',
                                                textAlign: 'left',
                                                padding: '3px 10px'
                                            }}>{event.when.date} kl {event.when.from}-{event.when.to}
                                        </Typography>
                                    </StyledTableCell>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>
                                        <Button
                                            onClick={() => handleDecrement(event.name)}
                                            style={{
                                                fontSize: '30px',
                                                color: '#FFFFFF',
                                                padding: 0,
                                                minWidth: '15px'
                                            }}>-
                                        </Button>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        style={{
                                            fontSize: '28px',
                                            color: '#FFFFFF',
                                            padding: 0,
                                            minWidth: '27px'
                                        }}>{ticketQuantities[event.name]}
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Button
                                            onClick={() => handleIncrement(event.name)}
                                            style={{
                                                padding: 0,
                                                minWidth: '10px',
                                                fontSize: '30px',
                                                color: '#FFFFFF'
                                            }}>+
                                        </Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </BiggerTableWrapper>
                )
            ))}

            <section style={{ paddingTop: '20px' }}>
                <Typography 
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Fira Sans',
                        fontSize: '19px',
                        fontStyle: 'italic',
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: '400'
                    }}>Total värde på order 
                </Typography>
                <Typography 
                    style={{
                        textAlign: 'center',
                        fontFamily: 'Fira Sans',
                        fontSize: '32px',
                        color: '#FFFFFF',
                        fontWeight: '700',
                        textShadow: '1px 1px 0 rgba(245, 107, 154, 1)'
                    }}>{totalPrice} sek
                </Typography>
            </section>

            <div 
                style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center' }}>
                <StyledButton 
                    variant="contained"
                    onClick={goToTicketItem}>
                    Skicka order
                </StyledButton>
            </div>
        </div>
    )
}

export default OrderPage