import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)`
    && {
        background-color: #37AEAB;
        font-family: 'Fira Sans';
        font-weight: 600;
        font-size: 20px;
        padding: 10px 30px;
        margin: 5px 0 40px 0;
        width: 85%;
    }

    &&:hover {
        background-color: #F56B9A;
    }
`