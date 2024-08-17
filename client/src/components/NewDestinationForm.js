import React, { useContext } from 'react';
import { Context } from './Context';

function NewDestinationForm() {

    const { city, setCity, state, setState, country, setCountry, image, setImage, addDestination } = useContext(Context);

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
            city: city,
            state: state,
            country: country,
            image: image
        }
        setCity("");
        setState("");
        setCountry("");
        setImage("");

        fetch('/all_destinations', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        })
            .then((r) => r.json())
            .then((destination) => addDestination(destination))
    }

    return(

        <div className='new-destination-form'>
            <br />
            <form onSubmit={handleSubmit} >
                <h4> Add New Destination: </h4>
                <br />

                <label>City: </label>
                <input type='text' name='city' placeholder='city name' value={city} onChange={(e) => setCity(e.target.value)} />
                <br />
                <label>State: </label>
                <input type='text' name='state' placeholder='state name or N/A' value={state} onChange={(e) => setState(e.target.value)} />
                <br />
                <label>Country: </label>
                <input type='text' name='country' placeholder='country name' value={country} onChange={(e) => setCountry(e.target.value)} />
                <br />
                <label>City Image URL: </label>
                <input type='text' name='image' placeholder='city image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                <br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default NewDestinationForm;