import React, { createContext, useContext } from 'react';

const InformationContext = createContext();

export const InformationProvider = ({ children, value}) => {
    return (
        <InformationContext.Provider value={value}>
            {children}
        </InformationContext.Provider>
    );
};

export const useInformationContext = () => {
    return useContext(InformationContext);
};

export default InformationContext;