import React, { createContext, useState } from 'react';
const UserInfoContext = createContext();

// Provides data to it's children 
export function UserInfoProvider({ children }) {
    const [userInfo, setUserInfo] = useState({})

    const updateUserInfo = (field, value) => {
        setUserInfo(userInfo => ({
            ...userInfo,
            [field]: value
        }));
    }

    return (
        <UserInfoContext.Provider value={[userInfo, updateUserInfo]}>
            {children}
        </UserInfoContext.Provider>
    )
}

export default UserInfoContext;