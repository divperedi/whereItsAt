import { create } from 'zustand';

const usePageIndex = create(set => ({
    currentPageIndex: 0,
    setCurrentPageIndex: (index) => set({ currentPageIndex: index }),
}));

export default usePageIndex;