import { create } from 'zustand';
import axios from 'axios';

const useEventStore = create((set) => ({
    events: [],
    fetchEvents: async () => {
        try {
            const response = await axios.get('https://santosnr6.github.io/Data/events.json');
            const events = response.data.events;
            set({ events });
            return events;
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    },
    selectedEvent: null,
    setSelectedEvent: (event) => set({ selectedEvent: event }),
    selectedEvents: [],
    ticketQuantities: {},
    addTicketQuantities: (quantities) =>
        set((state) => ({
            ticketQuantities: { ...state.ticketQuantities, ...quantities },
        })),
    setQuantity: (eventName, quantity) =>
        set((state) => ({
            ticketQuantities: { ...state.ticketQuantities, [eventName]: quantity },
        })),
    addSelectedEvent: (event) =>
        set((state) => {
            const selectedEvents = [...state.selectedEvents];
            const existingEventIndex = selectedEvents.findIndex(
                (selectedEvent) => selectedEvent.id === event.id
            );
            if (existingEventIndex === -1) {
                selectedEvents.push(event);
            }
            return { selectedEvents };
        })
}));

export default useEventStore;
