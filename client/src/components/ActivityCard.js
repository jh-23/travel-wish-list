import React, { useContext} from 'react';
import { Context } from './Context';
import './ActivityCard.css';
import { useNavigate } from 'react-router-dom';

function ActivityCard({ activity }) {

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
        <div className="activity-card">
            <img src={activity.activity_image} alt={activity.activity_name} className="activity-image" />
            <div className="activity-details">
                <h2>{activity.activity_name}</h2>
                <p>{activity.activity_description}</p>
                <br />
                <button onClick={handleClick} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Add Activity to Wish List</button>
                <br />
                <button onClick={handleEditClick} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Edit Activity Card</button>
                <br />
                <button onClick={handleDeleteClick} class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Delete Activity</button>
            </div>
        </div>
    )
}

export default ActivityCard;