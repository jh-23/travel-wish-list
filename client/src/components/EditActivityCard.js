import React, { useState, useContext } from 'react';
import { Context } from './Context';

function EditActivityCard() {

    const { currActivity, setCurrActivity, handleUpdateActivity, setActivities } = useContext(Context);

    const [activityName, setActivityName] = useState(currActivity.activity_name)
    const [activityDescription, setActivityDescription] = useState(currActivity.activity_description)
    const [activityImage, setActivityImage] = useState(currActivity.activity_image)

    function handleEditClick(e) {
        e.preventDefault();
        fetch(`/activity/${currActivity.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                activity_name: activityName,
                activity_description: activityDescription,
                activity_image: activityImage,
            }),
        })
        .then((r) => r.json())
        .then((updatedActivityInfo) => {
            handleUpdateActivity(updatedActivityInfo)
            setActivities(updatedActivityInfo)
        });
    }

    console.log(currActivity);

    return(
        <div>
            <h1>Travel Wish List App</h1>
            <h4>Edit Activity Info: </h4>
            <form className='edit-activity-info' onSubmit={handleEditClick}>
                <label>Activity Name: </label>
                <input type="text" name="activity name" placeholder={currActivity.activity_name} value={activityName} onChange={(e) => setActivityName(e.target.value)} />
                <br />
                <label>Activity Description: </label>
                <input type="text" name="activity description" placeholder={currActivity.activity_description} value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} />
                <br />
                <label>Activity Image URL: </label>
                <input type="text" name="activity image url" placeholder={currActivity.activity_image} value={activityImage} onChange={(e) => setActivityImage(e.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default EditActivityCard;