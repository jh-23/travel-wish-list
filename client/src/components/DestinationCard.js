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

    console.log(destination)
    
    return(
        <div>
        <div className="destination-card">
            <img class="rounded-t-lg rounded-b-lg" src={destination.image} alt={`${destination.city} image`} className="destination-image" />
            <div className="destination-info">
                <h2>{destination.city}</h2>
                <p>{destination.state}, {destination.country}</p>
            </div>
            <button onClick={handleGetActivityByDestinationClick} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">View Activities</button>
        </div>
        </div>
    )
}

export default DestinationCard;