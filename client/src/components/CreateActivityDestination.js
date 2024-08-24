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
                    <h1 class="flex items-center text-5xl font-extrabold dark:text-white">Travel Wish List App</h1>
                    <br />
                    <h4 class="text-2xl font-bold dark:text-white">Create Activity Destination Here:</h4>
                    <br />
                    <br />
                    <label name="activity" id="activity">Select Activity:      </label>
                    <select name="destination" class="w-100 border-gray- px-3 py-2 rounded-log shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                <br />
                <div>
                    <label htmlFor="destination">Select Destination:       </label>
                    <select name="destination" class="w-600 border-gray- px-3 py-2 rounded-log shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
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
                <br />
                <button type="submit" class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">Submit</button>
            </form>
        </div>
    )
}

export default CreateActivityDestination;