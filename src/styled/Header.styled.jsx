import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 10px;
`;

export const Title = styled.h1`
    color: #F56B9A;
    font-size: 32px;
    padding: 5px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

export const SearchInput = styled.input`
    background-color: rgba(255, 255, 255, 0.1);
    padding: 10px;
    width: 310px;
    border-radius: 3px;
    outline: none; 
    box-shadow: none;
    border: 1px solid transparent; 

    &:focus {
        border-color: transparent;
`;

export const SubTitle = styled.h2`
    font-size: 19px;
`