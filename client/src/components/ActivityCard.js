import React, { useContext} from 'react';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

function ActivityCard({ activity, destination }) {

    const { destinationId, user, addActivityToWishList, currActivity, setCurrActivity, handleDeleteActivity } = useContext(Context)

    const navigate = useNavigate();

    function handleClick(e) {
        e.preventDefault();
        fetch(`/activity_by_destination/${activity.id}`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                destination_id: destinationId,
                activity_id: activity.id,

            })
        })
        .then((r) => r.json())
        .then((addedActivity) => addActivityToWishList(addedActivity))
    }

    function handleEditClick() {
        setCurrActivity(activity)
        navigate(`/editactivitycard/${activity.id}`)
    }

    function handleDeleteClick() {
        fetch(`/activity/${activity.id}`, {
            method: "DELETE",
        })
        handleDeleteActivity(activity.id)
    }


    console.log(user)

    return(
        <div class="bg-white shadow-lg rounded-lg overflow-hidden m-4 max-w-sm">
        <img
            src={activity.activity_image}
            alt={activity.activity_name}
            class="w-full h-48 object-cover"
        />
        <div class="p-4">
            <h2 class="text-xl font-bold text-blue-600">{activity.activity_name}</h2>
            <p class="text-gray-700 mt-2">{activity.activity_description}</p>
            <br />
            <div class="space-y-2">
                <button
                    onClick={handleClick}
                    class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-full"
                >
                    Add Activity to Wish List
                </button>
                <button
                    onClick={handleEditClick}
                    class="bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded w-full"
                >
                    Edit Activity Card
                </button>
                <button
                    onClick={handleDeleteClick}
                    class="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b- border-red-700 hover:border-red-500 rounded w-full"
                >
                    Delete Activity
                </button>
            </div>
        </div>
    </div>
)
}

export default ActivityCard;

