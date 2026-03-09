import { create } from 'zustand';

export const useStore = create((set) => ({
    userRole: 'technician', // technician | supervisor | procurement
    setUserRole: (role) => set({ userRole: role }),
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    clearCart: () => set({ cart: [] }),
    quotes: [
        { id: 'Q-1001', parts: ['TXV Valve', 'Capacitor', 'Contactors'], status: 'pending', technician: 'Sameer', baseCost: 450.00 },
    ],
    addQuote: (quote) => set((state) => ({ quotes: [quote, ...state.quotes] })),
    siteVisits: [
        { id: 'SV-491', location: 'Tech Park Tower B', status: 'diagnosing' },
        { id: 'SV-492', location: 'Retail Mall Unit 4', status: 'parts_ordered' },
    ]
}));
