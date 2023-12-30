import { createContext, useState } from 'react';
const UserInfoContext = createContext();

// Provides data to it's children 
export function UserInfoProvider({ children }) {
    const [userInfoContext, setUserInfoContext] = useState({})
    return (
        <UserInfoContext.Provider value={[userInfoContext, setUserInfoContext]}>{children}</UserInfoContext.Provider>
    )
}

export default UserInfoContext;