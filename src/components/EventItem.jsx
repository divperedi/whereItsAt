import { PageContainer } from '../styled/PageContainer.styled';
import { Typography, Table, TableBody, TableContainer, Button } from '@mui/material';
import { StyledButton } from '../styled/Button.styled';
import { StyledTableCell, StyledTableCellWithPadding, StyledTableRow, TableWrapper } from '../styled/Table.styled';
import useEventStore from '../stores/eventStore';
import { useState } from 'react';

export default function EventItem({ selectedEvent, handleDecrement, handleIncrement, ticketQuantities }) {
    const addSelectedEvent = useEventStore(state => state.addSelectedEvent);
    const addTicketQuantities = useEventStore(state => state.addTicketQuantities);
    
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    
    const handleAddToCart = () => {
        if (!isButtonClicked) {
            addSelectedEvent(selectedEvent);

            const updatedQuantities = {
                ...ticketQuantities,
                [selectedEvent.name]: (ticketQuantities[selectedEvent.name] || 0),
            };
            addTicketQuantities(updatedQuantities);
    
            setIsButtonClicked(true);
        }
    };
    
    return (
        selectedEvent && (
            <div 
                style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    height: '70vh' 
                    }}>
                <PageContainer 
                    style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        height: '23vh', 
                        marginTop: 'auto' 
                        }}>
                    <Typography 
                        variant="h4"
                        style={{ 
                            fontSize: '35px', 
                            color: '#F56B9A', 
                            fontFamily: 'Sansita One' 
                            }}>{selectedEvent.name}
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        style={{ 
                            fontSize: '19px', 
                            color: '#37AEAB', 
                            fontFamily: 'Fira Sans' 
                            }}>{selectedEvent.when.date} kl {selectedEvent.when.from} - {selectedEvent.when.to}
                    </Typography>
                    <Typography 
                        variant="subtitle1"
                        style={{ 
                            fontSize: '16px', 
                            color: 'rgba(255, 255, 255, 0.7)', 
                            fontFamily: 'Fira Sans', 
                            fontStyle: 'italic' 
                            }}>@ {selectedEvent.where}
                    </Typography>
                </PageContainer>

                <TableWrapper>
                    <TableContainer style={{ borderRadius: '3px' }}>
                        <Table>
                            <TableBody>
                                <StyledTableRow>
                                    <StyledTableCellWithPadding
                                        colSpan={3}
                                        style={{
                                            fontSize: '32px',
                                            color: '#FFFFFF',
                                            padding: '20px',
                                            textShadow: '1px 1px 0 rgba(245, 107, 154, 1)'
                                        }}>
                                        {ticketQuantities[selectedEvent.name]
                                            ? selectedEvent.price * ticketQuantities[selectedEvent.name]
                                            : 0} sek
                                    </StyledTableCellWithPadding>
                                </StyledTableRow>
                                <StyledTableRow>
                                    <StyledTableCell>
                                        <Button
                                            onClick={handleDecrement}
                                            style={{
                                                fontSize: '30px',
                                                color: '#FFFFFF',
                                                padding: 0,
                                                minWidth: '15px'
                                            }}>-</Button>
                                    </StyledTableCell>
                                    <StyledTableCell
                                        style={{
                                            fontSize: '28px',
                                            color: '#FFFFFF',
                                            padding: 0,
                                            minWidth: '50px'
                                        }}
                                    >{ticketQuantities[selectedEvent.name] || 0}</StyledTableCell>
                                    <StyledTableCell>
                                        <Button
                                            onClick={handleIncrement}
                                            style={{
                                                padding: 0,
                                                minWidth: '10px',
                                                fontSize: '30px',
                                                color: '#FFFFFF'
                                            }}>+</Button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TableWrapper>

                <div 
                    style={{ 
                        display: 'flex', 
                        justifyContent: 'center', 
                        alignItems: 'center' 
                    }}>
                    <StyledButton
                        variant="contained" 
                        onClick={handleAddToCart}
                        disabled={isButtonClicked}>
                        Lägg i varukorgen
                    </StyledButton>
                </div>
            </div>
        )
    );
}