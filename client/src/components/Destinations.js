import React, { useEffect, useContext } from 'react';
import { Context } from './Context';
import DestinationCard from './DestinationCard';

function Destinations() {

    const { destinations, setDestinations } = useContext(Context);
    console.log(useContext(Context))

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
        <div>
            <h1>Travel Wish List App</h1>
            <h1>See list of Destinations: </h1>
            <div className='destination-container'>
                {destinations.map((destination) => (
                    <DestinationCard key={destination.id} destination={destination} />
                ))}
            </div>
        </div>
    )
}

export default Destinations;