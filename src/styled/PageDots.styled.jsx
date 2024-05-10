import styled from 'styled-components';

export const DotContainer = styled.section`
    position: fixed;
    bottom: 13px;
    left: 50%; 
    transform: translateX(-50%);
    display: flex;
    justify-content: center;
    z-index: 999;
`;

export const Dot = styled.section`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ $isActive }) => $isActive ? '#DD609A' : '#FFFFFF'};
    margin: 0 5px;
    cursor: pointer;
`;
