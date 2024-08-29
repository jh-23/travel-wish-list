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
        <body class="bg-cover bg-center h-screen" style={{ backgroundImage: "url(https://rezdy.com//wp-content/uploads/2016/04/Blog-Photos-9.jpg)" }}>
        <div>
            <br />
            <form onSubmit={handleSubmit} >
                <h1 class="flex items-center text-5xl font-extrabold text-blue-500"> Travel Wish List App</h1>
                <h4 class="text-2xl font-bold font-extrabold text-blue-500"> Add a new travel destination: </h4>
                <br />
                <label class="text-blue-500 font-extrabold">City: </label>
                <input type='text' name='city' placeholder='CITY NAME' value={city} onChange={(e) => setCity(e.target.value)} class="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" />
                <br />
                <br />
                <label class="text-blue-500 font-extrabold">State: </label>
                <input type='text' name='state' placeholder='State name or N/A' value={state} onChange={(e) => setState(e.target.value)} />
                <br />
                <br />
                <label class="text-blue-500 font-extrabold">Country: </label>
                <input type='text' name='country' placeholder='Country name' value={country} onChange={(e) => setCountry(e.target.value)} />
                <br />
                <br />
                <label class="text-blue-500 font-extrabold">City Image URL: </label>
                <input type='text' name='image' placeholder='City image URL' value={image} onChange={(e) => setImage(e.target.value)} />
                <br />
                <br />
                <button type='submit' class="select-none rounded-lg border border-red-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">Submit</button>
            </form>
        </div>
        </body>
        </div>
    )
}

export default NewDestinationForm;