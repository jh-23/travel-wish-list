import React, { useEffect, useContext } from 'react';
import { Context } from './components/Context';
import ActivityCard from './components/ActivityCard';

function Activities() {

    const { activities, setActivities, destinationId } = useContext(Context);

    useEffect(() => {
        fetch(`/activity_by_destination/${destinationId}`)
            .then((r) => {
                if(!r.ok) {
                    throw new Error('Network response was not ok');
                }
                return r.json();
            })
            .then((activities) => {
                if (activities.error) {
                    throw new Error(activities.error)
                }
                setActivities(activities)
            })
            .catch((error) => {
                console.error('Error fetching destinations: ', error)
            })
    }, [destinationId, setActivities])

    if(!activities) {
        return <h1>Loading...</h1>
    }

    console.log(activities)


    return(
        <div>
            <h1>Travel Wish List App</h1>
            <h1>Activities List: </h1>
            <div className='activity-container'>
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
            </div>
        </div>
    )
}

export default Activities;