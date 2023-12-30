import React, { createContext, useContext } from 'react';

const PaymentContext = createContext();

export const PaymentProvider = ({ children, value }) => {
    return (
        <PaymentContext.Provider value={value}>
            {children}
        </PaymentContext.Provider>
    );
};

export const usePaymentContext = () => {
    return useContext(PaymentContext);
};

export default PaymentContext;