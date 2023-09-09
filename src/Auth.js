// Import necessary React and Firebase modules
import React, { useState, useEffect } from 'react';
import app from './firebase/firebase';

// Create an authentication context using React's createContext
export const AuthContext = React.createContext();

// AuthProvider is a component responsible for managing user authentication state
export const AuthProvider = ({ children }) => {
    // Initialize a state variable to hold the current user
    const [currentUser, setCurrentUser] = useState(null);

    // Use useEffect to set up a listener for changes in user authentication state
    useEffect(() => {
        // The 'onAuthStateChanged' method from Firebase listens for authentication state changes
        // When the user logs in or out, it triggers this method with the current user or null
        app.auth().onAuthStateChanged(setCurrentUser);
    }, []);

    // Return an AuthContext.Provider to provide the authentication state to child components
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}
