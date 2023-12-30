import React, { createContext, useContext } from 'react';

const ShippingContext = createContext();

export const ShippingContextProvider = ({ children, value }) => {
    return (
        <ShippingContext.Provider value={value}>
            {children}
        </ShippingContext.Provider>
    );
};

export const useShippingContext = () => {
    return useContext(ShippingContext);
};

export default ShippingContext;