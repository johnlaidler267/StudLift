import { createContext, useState } from 'react';
const CartContext = createContext();

// Provides data to it's children 
export function CartProvider({ children }) {
    const [cartContext, setCartContext] = useState({})
    return (
        <CartContext.Provider value={[cartContext, setCartContext]}>{children}</CartContext.Provider>
    )
}

export default CartContext;