import styled from 'styled-components';
import { TableCell, TableRow, Box } from '@mui/material';

export const StyledTableCell = styled(TableCell)`
    border: 2px solid #F56B9A !important;
    text-align: center !important;
    background-color: transparent;
    margin: 0 auto;
    border-radius: 3px;
    font-family: Fira Sans !important;
    padding: 0 !important;
`;

export const StyledTableCellWithPadding = styled(TableCell)`
    border: 2px solid #F56B9A !important;
    text-align: center !important;
    background-color: transparent;
    margin: 0 auto;
    border-radius: 3px;
    font-family: Fira Sans !important;
    padding: 20px;
`;

export const StyledTableRow = styled(TableRow)`
    background-color: transparent;
`;

export const TableWrapper = styled(Box)`
    width: 75%;
    margin: 0 auto;
    border-radius: 3px;
    padding: 20px;
    margin-top: auto;
`;

export const BiggerTableWrapper = styled(Box)`
    width: 100%;
    margin: 0 auto;
    border-radius: 3px;
    padding: 7px 20px;
    margin-top: auto;
`;