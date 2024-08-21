import React, { useEffect, useContext } from 'react';
import { Context } from './Context';

function CreateActivityDestination() {

    const { destinations, setDestinations, activities, setActivities, selectedActivity, setSelectedActivity, selectedDestination, setSelectedDestination, message, setMessage, errors } = useContext(Context);

    useEffect(() => {
        fetch('/all_destinations')
            .then((response) => response.json())
            .then((data) => setDestinations(data))
            .catch((error) => console.error('Error fetching destinations:', error));

        fetch('/all_activities')
            .then((response) => response.json())
            .then((data) => setActivities(data))
            .catch((error) => console.error('Error fetching activities:', error));
        }, [])

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            activity_id: selectedActivity,
            destination_id: selectedDestination
        };
        setSelectedActivity("");
        setSelectedDestination("");

        fetch('/add_activity_destination', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                setMessage('Activity destination created successfully!');
                } else {
                response.json().then((error) => setMessage(error.message));
                }
            })
            .catch((error) => setMessage('Error creating activity destination.'));
    }


    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="activity">Select Activity:</label>
                    <select
                        id="activity"
                        value={selectedActivity}
                        onChange={(e) => setSelectedActivity(e.target.value)}
                    >
                        <option value="">--Select Activity--</option>
                        {activities.map((activity) => (
                            <option key={activity.id} value={activity.id}>
                                {activity.activity_name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="destination">Select Destination:</label>
                    <select
                        id="destination"
                        value={selectedDestination}
                        onChange={(e) => setSelectedDestination(e.target.value)}
                    >
                        <option value="">--Select Destination--</option>
                        {destinations.map((destination) => (
                            <option key={destination.id} value={destination.id}>
                                {destination.city}, {destination.country}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateActivityDestination;