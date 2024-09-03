import React, { useEffect, useContext } from 'react';
import { Context } from './Context';
import ActivityCard from './ActivityCard';

function WishList() {
    const { user, activityWishList, setActivityWishList } = useContext(Context);

    useEffect(() => {
        fetch('/added_activity_by_destination')
            .then((r) => {
                if(!r.ok) {
                    throw new Error('Network response was not ok');
                }
                return r.json();
            })
            .then((activityWishList) => {
                if (activityWishList.error) {
                    throw new Error(activityWishList.error);
                }
                setActivityWishList(activityWishList);
            })
            .catch((error) => {
                console.error('Error fetching Activity Wish List: ', error);
            });
    }, [setActivityWishList]);

    if (!activityWishList) {
        return <h1>Loading...</h1>;
    }

    console.log(activityWishList)
    


    // Group activities by destination
    const groupedActivities = activityWishList.reduce((acc, item) => {
        const destinationName = `${item.destination.city}, ${item.destination.country}`;
        if (!acc[destinationName]) {
            acc[destinationName] = [];
        }
        acc[destinationName].push(item.activity);
        return acc;
    }, {});


    return (
        <div>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-orange-500 md:text-5xl lg:text-6xl dark:text-white">{ user ? `${user.username}'s Travel Wish List` : 'Travel Wish List'}</h1>
            {Object.entries(groupedActivities).map(([destination, activities]) => (
                <div key={destination}>
                    <h2 class="text-3xl font-bold text-blue-500">{destination}</h2>
                    {activities.map((activity) => (
                        <ActivityCard key={activity.id} activity={activity} />
                    ))}
                    <br />
                    <br />
                </div>
            ))}
        </div>
    );
}

export default WishList;