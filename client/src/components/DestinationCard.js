import React from 'react';
import './DestinationCard.css';

function DestinationCard({ destination }) {

    console.log(destination)
    
    return(
        <div>
        <div className="destination-card">
            <img src={destination.image} alt={`${destination.city} image`} className="destination-image" />
            <div className="destination-info">
                <h2>{destination.city}</h2>
                <p>{destination.state}, {destination.country}</p>
            </div>
        </div>
        </div>
    )
}

export default DestinationCard;