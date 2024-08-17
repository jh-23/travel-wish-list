import React, { useState, createContext } from 'react';
const Context = createContext()

function ContextProvider({ children }) {

    const [user, setUser] = useState(null);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [destinations, setDestinations] = useState([]);
    const [activities, setActivities] = useState([]);

    return(
        <Context.Provider value={{ username, setUsername, password, setPassword, user, setUser, errors, setErrors, isLoading, setIsLoading, destinations, setDestinations, activities, setActivities }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }