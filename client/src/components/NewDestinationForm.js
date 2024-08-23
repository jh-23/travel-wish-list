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
        <div>
        <body class="h-screen bg-gradient-to-b from-green-200 to-green-500">
        <div>
            <br />
            <form onSubmit={handleSubmit} >
                <h1 class="flex items-center text-5xl font-extrabold dark:text-white"> Travel Wish List App</h1>
                <h4 class="text-2xl font-bold dark:text-white"> Add New Destination: </h4>
                <br />
                <label>City: </label>
                <input type='text' name='city' placeholder='city name' value={city} onChange={(e) => setCity(e.target.value)} class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" />
                <br />
                <br />
                <label>State: </label>
                <input type='text' name='state' placeholder='state name or N/A' value={state} onChange={(e) => setState(e.target.value)} />
                <br />
                <br />
                <label>Country: </label>
                <input type='text' name='country' placeholder='country name' value={country} onChange={(e) => setCountry(e.target.value)} />
                <br />
                <br />
                <label>City Image URL: </label>
                <input type='text' name='image' placeholder='city image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                <br />
                <br />
                <button type='submit'  class="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Submit</button>
            </form>
        </div>
        </body>
        </div>
    )
}

export default NewDestinationForm;