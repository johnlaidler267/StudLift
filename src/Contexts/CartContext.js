import React, { createContext, useState } from 'react';
const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartContext, setCartContext] = useState([]);

    return (
        <CartContext.Provider value={[cartContext, setCartContext]}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContext;