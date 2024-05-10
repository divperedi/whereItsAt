import usePageIndex from './stores/pageIndex';
import { useSwipeable } from 'react-swipeable';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styled/Global';
import PageDots from './components/PageDots';
import './App.css';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventPage from './pages/EventPage';
import OrderPage from './pages/OrderPage';
import TicketsPage from './pages/TicketsPage';
import { useEffect } from 'react';
import useEventStore from './stores/eventStore';

const theme = {
  colors: {
    bg: '#231F42',
    gradient: 'linear-gradient(to bottom, #DD609A, #231F42)'
  }
}

function App() {
  const events = useEventStore(state => state.events);

  useEffect(() => {
    useEventStore.getState().fetchEvents();
  }, []);

  const navigate = useNavigate();
  const pages = ['/', '/events', '/order', '/tickets'];

  const currentPageIndex = usePageIndex(state => state.currentPageIndex);

  useEffect(() => {
    useEventStore.getState().fetchEvents();
  }, []);

  useEffect(() => {
    const index = pages.indexOf(window.location.pathname);
    usePageIndex.getState().setCurrentPageIndex(index);
  }, []);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Swiped left');
      if (window.location.pathname.startsWith('/event/') && currentPageIndex < pages.length - 1) {
        navigate(pages[currentPageIndex + 1]);
        usePageIndex.getState().setCurrentPageIndex(currentPageIndex + 1);
      } else if (currentPageIndex < pages.length - 1) {
        navigate(pages[currentPageIndex + 1]);
        usePageIndex.getState().setCurrentPageIndex(currentPageIndex + 1);
      }
    },
    onSwipedRight: () => {
      console.log('Swiped right');
      if (window.location.pathname.startsWith('/event/')) {
        navigate('/events');
        usePageIndex.getState().setCurrentPageIndex(pages.indexOf('/events'));
      } else if (currentPageIndex > 0) {
        navigate(pages[currentPageIndex - 1]);
        usePageIndex.getState().setCurrentPageIndex(currentPageIndex - 1);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <div {...handlers}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/events' element={<EventsPage events={events} />} />
          <Route path='/event/:id' element={<EventPage events={events} />} />
          <Route path='/order' element={<OrderPage />} />
          <Route path='/tickets' element={<TicketsPage />} />
        </Routes>
        <PageDots pages={pages} currentPageIndex={currentPageIndex} />
      </ThemeProvider>
    </div>
  )
}

export default App
