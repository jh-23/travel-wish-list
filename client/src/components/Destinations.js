import React, { useEffect, useContext } from 'react';
import { Context } from './Context';
import DestinationCard from './DestinationCard';

function Destinations() {

    const { destinations, setDestinations } = useContext(Context);

    useEffect(() => {
        fetch("/all_destinations")
            .then((r) => {
                if(!r.ok) {
                    throw new Error('Network response was not ok');
                }
                return r.json();
            })
            .then((destinations) => {
                if (destinations.error) {
                    throw new Error(destinations.error)
                }
                setDestinations(destinations)
            })
            .catch((error) => {
                console.error('Error fetching destinations: ', error)
            })
    }, [setDestinations])

    if(!destinations) {
        return <h1>Loading...</h1>
    }

    console.log(destinations)


    return(
        <div class="bg-blue-500 min-h-screen p-6">
            <h1 class="text-2xl font-medium text-white">Travel Wish List App</h1>
            <h1 class='text-xl text-white mb-4'>See list of Destinations: </h1>
            <div className='destination-container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
        </div>
    )
}

export default Destinations;