import { createContext, useState } from 'react';

const CheckoutContext = createContext();

export function CheckoutProvider({ children }) {
    const [checkoutContext, setCheckoutContext] = useState({});
    return (
        <CheckoutContext.Provider value={[ checkoutContext, setCheckoutContext ]}>
            {children}
        </CheckoutContext.Provider>
    )
}

export default CheckoutContext;