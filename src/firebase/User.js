import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from './firebase';

const UserContext = createContext(null);

export default function UserProvider({ children }) {
    const [sesssiion, setSession] = useState({
        user: null, 2
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setSession({ user });
        });
        return () => unsubFromFbStateChange();
    });

    return (
        <UserContext.Provider value={session}>{children}</UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext);