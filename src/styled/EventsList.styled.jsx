import styled from 'styled-components';

export const EventBox = styled.div`
    margin-bottom: 10px;
    padding: 5px 0 5px;
    background-color: #231F42;
    display: flex;
    justify-content: space-between;
    width: 100vw;
    height: 100%;

    @media (min-width: 390px) {
        padding: 20px 0 20px;
        width: 100vw;
        height: 100%;
    }

    @media (min-width: 450px) {
        padding: 30px 0 30px;
        width: 100vw;
        height: 100%;
    }
`;

export const DateBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 66px;
    height: 66px;
    border: 1px solid #FFFFFF;
    border-radius: 3px;
    background-color: transparent;
    margin-top: 8px;

    @media (min-width: 390px) {
        width: 70px;
        height: 70px;
    }

    @media (min-width: 450px) {
        width: 77px;
        height: 77px;
    }
`;

export const DateText = styled.p`
    font-family: 'Fira Sans';
    font-size: 14px;
    color: #FFFFFF;

    @media (min-width: 390px) {
        font-size: 16px;
    }

    @media (min-width: 450px) {
        font-size: 18px;
    }
`;

export const EventName = styled.h6`
    font-family: 'Fira Sans';
    font-size: 22px;
    color: #FFFFFF;
    text-shadow: 1px 1px 0 rgba(245, 107, 154, 1);

    @media (min-width: 390px) {
        font-size: 23px;
    }

    @media (min-width: 450px) {
        font-size: 24px;
    }
`;

export const EventWhere = styled.p`
    font-family: 'Fira Sans';
    font-style: italic;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.8);
    line-height: 2px;

    @media (min-width: 390px) {
        font-size: 13px;
    }

    @media (min-width: 450px) {
        font-size: 14px;
    }
`;

export const EventWhen = styled.p`
    white-space: nowrap;
    font-family: 'Fira Sans';
    font-size: 14px;
    color: rgba(208, 208, 208, 1);
    margin-top: 5px;

    @media (min-width: 390px) {
        font-size: 15px;
    }

    @media (min-width: 450px) {
        font-size: 16px;
    }
`;

export const EventPrice = styled.p`
    text-align: right;
    font-family: 'Fira Sans';
    font-size: 17px;
    color: rgba(55, 174, 171, 1);

    @media (min-width: 390px) {
        font-size: 18px;
    }

    @media (min-width: 450px) {
        font-size: 19px;
    }
`;

export const HrLine = styled.hr`
    border-color: rgba(255, 255, 255, 0.3);
`;
