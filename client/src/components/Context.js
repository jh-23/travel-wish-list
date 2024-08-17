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
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [image, setImage] = useState("");

    const [activityName, setActivityName] = useState("");
    const [activityDescription, setActivityDescription] = useState("");
    const [activityImage, setActivityImage] = useState("");

    const [activityWishList, setActivityWishList] = useState("");
    const [activityList, setActivityList] = useState([]);
    const [destinationId, setDestinationId] = useState(null);


    function addDestination(newDestination) {
        const updatedDestinationList = [...destinations, newDestination]
        setDestinations(updatedDestinationList)
    }

    function addActivity(newActivity) {
        const updatedActivityList = [...activities, newActivity]
        setActivityDescription(updatedActivityList)
    }

    function addActivityToWishList(addedActivity) {
        const updatedWishList = [...activityWishList, addedActivity]
        setActivityWishList(updatedWishList)
    }



    return(
        <Context.Provider value={{ username, setUsername, password, setPassword, user, setUser, errors, setErrors, isLoading, setIsLoading, destinations, setDestinations, activities, setActivities, city, setCity, state, setState, country, setCountry, image, setImage, addDestination, activityName, setActivityName, activityDescription, setActivityDescription, activityImage, setActivityImage, addActivity, destinationId, setDestinationId }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }