import styled from 'styled-components';
import { Box, Card, CardContent, Typography } from '@mui/material';

export const TicketCard = styled(Card)`
    width: 80%;
    margin: 20px auto;
`;

export const TicketCardContent = styled(CardContent)`
    padding: 0;
`;

export const TicketBox = styled(Box)`
    padding: 10px;
    background-color: #FFFFFF;
    width: 100%;
    border-bottom: 1px dotted #000;
`;

export const TicketTypography = styled(Typography)`
    font-family: Fira sans;
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
`;

export const TicketTypographyLarge = styled(Typography)`
    padding: 8px 0 8px;
    font-family: Sansita one;
    font-size: 26px;
    color: #F56B9A;
`;