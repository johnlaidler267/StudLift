import { createContext, useState } from 'react';
const LoginContext = createContext();

// Provides data to it's children 
export function LoginProvider({ children }) {
    const [login, setLogin] = useState({})
    return (
        <LoginContext.Provider value={[login, setLogin]}>{children}</LoginContext.Provider>
    )
}

export default LoginContext;

