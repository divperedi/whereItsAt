import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Fira Sans';
        src: url('/fonts/FiraSans-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: 'Fira Sans';
        src: url('/fonts/FiraSans-ThinItalic.ttf') format('truetype');
        font-weight: 200;
        font-style: italic;
    }

    @font-face {
        font-family: 'Fira Sans';
        src: url('/fonts/FiraSans-Italic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
    }

    @font-face {
        font-family: 'Sansita One';
        src: url('/fonts/SansitaOne.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    } 

    body {
        background: ${({ theme }) => theme.colors.bg};
        font-size: 1.15em;
    }

    body.tickets-page::before {
        content: "";
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => theme.colors.gradient};
        z-index: -1;
    }

    h1 {
        color: #F56B9A;
        font-size: 32px;
        font-family: 'Sansita One', sans-serif;
    }

    h2 {
        color: #FFFFFF;
        font-size: 22px;
        font-family: 'Fira Sans';
        font-style: italic;
        font-weight: 200;
    }
`

export default GlobalStyles