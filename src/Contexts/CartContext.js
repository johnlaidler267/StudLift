import React, { createContext, useState, Component } from 'react';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Initialize state using useState
    const [cartContext, setCartContext] = useState(/* Initial state here */);

    return (
        <CartContext.Provider value={[cartContext, setCartContext]}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;