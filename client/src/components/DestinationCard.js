import React, { useContext } from 'react';

import { Context } from './Context';
import { useNavigate } from 'react-router-dom';

function DestinationCard({ destination }) {

    const { destinationId, setDestinationId, setDestination } = useContext(Context);

    const navigate = useNavigate();

    function handleGetActivityByDestinationClick() {
        setDestinationId(destination.id)
        setDestination(destination)
        navigate('/activities')
    }

    console.log(destination);
    
    return(
        <div>
        <div class="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
            <img class="w-full h-48 object-cover" src={destination.image} alt={`${destination.city} image`} />
            <div class="p-6">
            <h2 class="text-xl font-bold text-gray-800">{destination.city}</h2>
            <p class="text-gray-600">{destination.state}, {destination.country}</p>
            <div>
            </div>
            <br />
            <div class="px-3">
            <button onClick={handleGetActivityByDestinationClick} class="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-center">View Activities</button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default DestinationCard;