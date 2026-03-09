import { create } from 'zustand';

export const useStore = create((set) => ({
    cart: [],
    cartTotal: 0,
    addToCart: (item, qty) => set((state) => {
        const existing = state.cart.find(i => i.id === item.id);
        let newCart;
        if (existing) {
            newCart = state.cart.map(i => i.id === item.id ? { ...i, qty: i.qty + qty } : i);
        } else {
            newCart = [...state.cart, { ...item, qty }];
        }
        return {
            cart: newCart,
            cartTotal: newCart.reduce((total, i) => total + (i.price * i.qty), 0)
        };
    }),
    removeFromCart: (id) => set((state) => {
        const newCart = state.cart.filter(i => i.id !== id);
        return {
            cart: newCart,
            cartTotal: newCart.reduce((total, i) => total + (i.price * i.qty), 0)
        };
    }),
    updateCartQty: (id, qty) => set((state) => {
        const newCart = qty <= 0
            ? state.cart.filter(i => i.id !== id)
            : state.cart.map(i => i.id === id ? { ...i, qty: parseInt(qty, 10) } : i);
        return {
            cart: newCart,
            cartTotal: newCart.reduce((total, i) => total + (i.price * i.qty), 0)
        };
    }),
    clearCart: () => set({ cart: [], cartTotal: 0 }),
    cartName: '',
    setCartName: (name) => set({ cartName: name }),
    jobSite: '',
    setJobSite: (site) => set({ jobSite: site }),
}));
