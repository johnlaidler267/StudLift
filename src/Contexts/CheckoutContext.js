import React, { createContext, useState } from 'react';
const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
    const [checkoutInfo, setCheckoutInfo] = useState([]);
    return (
        <CheckoutContext.Provider value={[checkoutInfo, setCheckoutInfo]}>{children}</CheckoutContext.Provider>
    )
}

export default CheckoutProvider;