import React, { useContext } from 'react';
import './DestinationCard.css';
import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

function DestinationCard({ destination }) {

    const { destinationId, setDestinationId } = useContext(Context);

    const navigate = useNavigate();

    function handleGetActivityByDestinationClick() {
        setDestinationId(destination.id)
        navigate('/activities')
    }

    function handleEditClick() {
        navigate('')
    }

    console.log(destination)
    
    return(
        <div>
        <div className="destination-card">
            <img src={destination.image} alt={`${destination.city} image`} className="destination-image" />
            <div className="destination-info">
                <h2>{destination.city}</h2>
                <p>{destination.state}, {destination.country}</p>
            </div>
            <button onClick={handleGetActivityByDestinationClick}>View Activities</button>
        </div>
        </div>
    )
}

export default DestinationCard;