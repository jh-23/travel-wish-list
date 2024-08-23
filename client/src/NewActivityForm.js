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
            <h1 class="text-5xl font-extrabold dark:text-white">Travel Wish List App</h1>
            <h4 class="text-2xl font-bold dark:text-white"> Create Activity Here: </h4>
            <br />
            <form onSubmit={handleSubmit}>
                <br />
                <label>Activity Name: </label>
                <input type="text" name="activity-name" placeholder="Activity name" value={activityName} onChange={(e) => setActivityName(e.target.value)} />
                <br />
                <br />
                <label>Activity Description: </label>
                <input type="text" name="activity-description" placeholder="Activity Description" value={activityDescription} onChange={(e) => setActivityDescription(e.target.value)} />
                <br />
                <br />
                <label>Activity Image URL: </label>
                <input type="text" name="image" placeholder="Activity Image URL" value={activityImage} onChange={(e) => setActivityImage(e.target.value)} />
                <br />
                <br />
                <button type='submit' class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Submit</button>
            </form>
        </div>
    )
}

export default NewActivityForm;