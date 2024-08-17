import React, { useContext } from 'react';
import { Context } from './components/Context';

function NewActivityForm() {

    const { activityName, setActivityName, activityDescription, setActivityDescription, activityImage, setActivityImage, addActivity } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            activity_name: activityName,
            activity_description: activityDescription,
            activity_image: activityImage
        }
        setActivityName("");
        setActivityDescription("");
        setActivityImage("");

        fetch('/all_activities', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((activity) => addActivity(activity))
    }


    return(
        <div className='new-activity-form'>
            <br />
            <h1>Travel Wish List App</h1>
            <h1> New Activity form</h1>
            <form onSubmit={handleSubmit}>
                <h3>Add New Activity here: </h3>
                <br />
                <label>Activity Name: </label>
                <input type="text" name="activity-name" placeholder="Activity name" value={activityName} onChange={(e) => setActivityName(e.target.value)} />
                <br />
                <label>Activity Description: </label>
                <input type="text" name="activity-description" placeholder="Activity Description" value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} />
                <br />
                <label>Activity Image URL: </label>
                <input type="text" name="image" placeholder="Activity Image URL" value={activityImage} onChange={(e) => setActivityImage(e.target.value)} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewActivityForm;