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

    const [activityWishList, setActivityWishList] = useState([]);
    const [activityList, setActivityList] = useState([]);
    const [destinationId, setDestinationId] = useState(null);
    const [activityId, setActivityId] = useState(null)

    const [isEditing, setIsEditing] = useState(false)
    const [currActivity, setCurrActivity] = useState({});

    const [selectedActivity, setSelectedActivity] = useState("");
    const [selectedDestination, setSelectedDestination] = useState("");
    const [message, setMessage] = useState("");

    const [showSignUp, setShowSignUp] = useState(false);



    function addDestination(newDestination) {
        const updatedDestinationList = [...destinations, newDestination]
        setDestinations(updatedDestinationList)
    }

    function addActivity(newActivity) {
        const updatedActivityList = [...activities, newActivity]
        setActivityDescription(updatedActivityList)
    }

    function addActivityToWishList(addedActivity) {
        const updatedActivityWishList = [...activityWishList, addedActivity]
        setActivityWishList(updatedActivityWishList)
    }

    function handleUpdateActivity(updatedActivityObj) {
        const updatedActivity = activities.map((activity) => {
            if (activity.id === updatedActivityObj) {
                return updatedActivityObj
            } else {
                return activity
            }
        })
        setActivities(updatedActivity)
    }

    function handleDeleteActivity(id) {
        const updatedActivityCardList = activities.filter((activity) => activity.id !== id)
        setActivities(updatedActivityCardList)
    }


    return(
        <Context.Provider value={{ username, setUsername, password, setPassword, user, setUser, errors, setErrors, isLoading, setIsLoading, destinations, setDestinations, activities, setActivities, city, setCity, state, setState, country, setCountry, image, setImage, addDestination, activityName, setActivityName, activityDescription, setActivityDescription, activityImage, setActivityImage, addActivity, destinationId, setDestinationId, addActivityToWishList, activityWishList, setActivityWishList, isEditing, setIsEditing, handleUpdateActivity, currActivity, setCurrActivity, handleDeleteActivity, selectedActivity, setSelectedActivity, selectedDestination, setSelectedDestination, message, setMessage, showSignUp, setShowSignUp  }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }