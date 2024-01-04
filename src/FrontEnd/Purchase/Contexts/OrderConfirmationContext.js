import React, { createContext, useContext } from 'react';

const OrderConfirmationContext = createContext();

export const OrderConfirmationProvider = ({ children, value }) => {
    return (
        <OrderConfirmationContext.Provider value={value}>
            {children}
        </OrderConfirmationContext.Provider>
    );
};

export const useOrderConfirmationContext = () => {
    return useContext(OrderConfirmationContext);
};

export default OrderConfirmationContext;