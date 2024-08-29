
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context.js';


const  SignupForm = () => {

    const { isLoading, setIsLoading, user, setUser, password, setPassword } = useContext(Context);
    const navigate = useNavigate();

    const formSchema = yup.object().shape({
        username: yup.string().required("Must enter a valid username"),
        password: yup.string().required("Must enter a password").max(16)
    })


    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: formSchema,
        onSubmit: (values) => {
            setIsLoading(true);  
            console.log("I have been clicked")
            fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).then((r) => {
                if (r.status === 201) {
                    console.log(user)
                    setUser(r)
                    // navigate('/')
                }
            })
        }
    })

    function handleSignUpClick() {
        navigate('/login')
    }

    console.log(user);

    return (
        <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://wallpapers.com/images/hd/plane-desktop-yms31u8wyuke7ari.jpg')" }}>
            <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Sign up here to create a Travel Wish List Account: </h2>
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px"}}>
                <label class="text-neutral-600 text-base font-normal">Username:</label>
                <br />
                <input
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    class="h-10 w-100 border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-yellow-600"
                    placeholder="Username"
                >
                </input>
                <p style={{ color: "red" }}> {formik.errors.username}</p>
                <br />
                <label htmlFor='password' class="text-neutral-600 text-base font-normal">Password:</label>
                <br />
                <input
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    class="h-10 w-100 border-b-2 border-gray-200 text-gray-900 focus:outline-none focus:border-red-600"
                    placeholder="Password"
                >
                </input>
                <p style={{ color: "red" }}> {formik.errors.password}</p>
                <br />
                <br />
                <button onClick={handleSignUpClick} type='submit' class="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">{isLoading ? "Loading..." : "Sign Up"}</button>
            </form>
            <table style = {{ padding: "15px" }}>
            </table>
            
        </div>
    )

}

export default SignupForm;