import React from 'react';
import './ActivityCard.css';

function ActivityCard({ activity }) {

//POST REQUEST handleSubmit


    return(
        <div className="activity-card">
            <img src={activity.activity_image} alt={activity.activity_name} className="activity-image" />
            <div className="activity-details">
                <h2>{activity.activity_name}</h2>
                <p>{activity.activity_description}</p>
                <br />
                <button >Add Activity to Wish List</button>
            </div>
        </div>
    )
}

export default ActivityCard;