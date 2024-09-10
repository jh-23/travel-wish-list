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
        <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAzHeZ9YsdC0EKMr_KlJN9Rt9JeuPOb1uU0g&s')"}}>
            <h1 class="mb-4 text-5xl font-extrabold leading-none tracking-tight text-gray-900 text-red-500">Travel Wish List App</h1>
            <h4 class="text-2xl font-bold font-extrabold text-red-500">Edit Activity Info: </h4>
            <form className='edit-activity-info' onSubmit={handleEditClick}>
                <br />
                <label class="text-red-500 font-extrabold">Activity Name: </label>
                <input type="text" name="activity name" placeholder={currActivity.activity_name} value={activityName} onChange={(e) => setActivityName(e.target.value)} />
                <br />
                <label class="text-red-500 font-extrabold">Activity Description: </label>
                <input type="text" name="activity description" placeholder={currActivity.activity_description} value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} />
                <br />
                <label class="text-red-500 font-extrabold">Activity Image URL: </label>
                <input type="text" name="activity image url" placeholder={currActivity.activity_image} value={activityImage} onChange={(e) => setActivityImage(e.target.value)} />
                <br />
                <button type="submit" class="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">Submit</button>
            </form>
        </div>
    )
}

export default EditActivityCard;