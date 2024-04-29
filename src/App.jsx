import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import SwipeableViews from 'react-swipeable-views';
import GlobalStyles from './styled/Global';
import './App.css';
import HomePage from './pages/HomePage';

const theme = {
  colors: {
    bg: '#231F42',
    gradient: 'linear-gradient(to bottom, #DD609A, #231F42)'
  }
}

function App() {
  const navigate = useNavigate();

  const handleChangeIndex = (index) => {
    if (index === 0) {
      navigate.push('/');
    } else if (index === 1) {
      navigate.push('/events');
    } else if (index === 2) {
      navigate.push('/event');
    } else if (index === 3) {
      navigate.push('/order');
    } else if (index === 4) {
      navigate.push('/tickets');
    }
  };

  return (
    <SwipeableViews enableMouseEvents onChangeIndex={handleChangeIndex}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/events' element={<EventsPage />} />
				<Route path='/event' element={<EventPage />} />
				<Route path='/order' element={<OrderPage />} />
				<Route path='/tickets' element={<TicketsPage />} /> */}
        </Routes>
      </ThemeProvider>
    </SwipeableViews>
  )
}

export default App
