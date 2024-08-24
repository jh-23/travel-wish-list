
import React, { useContext, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Input from './Input.js';
import { useNavigate } from 'react-router-dom';
import { Context } from './Context.js';


const  SignupForm = () => {

    const { isLoading, setIsLoading, user, setUser } = useContext(Context);
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
                    setUser(r)
                    navigate('/')
                }
            })
        }
    })

    function handleSignUpClick() {
        navigate('/')
    }

    return (
        <div>
            <h2>Sign up here to create a Travel Wish List Account: </h2>
            <form onSubmit={formik.handleSubmit} style={{ margin: "30px"}}>
                <label htmlFor="username">Username:</label>
                <br />
                <Input
                    id="username"
                    name="username"
                    onChange={formik.handleChange}
                    value={formik.values.username}
                >
                </Input>
                <p style={{ color: "red" }}> {formik.errors.username}</p>
                <br />
                <label htmlFor='password'>Password:</label>
                <Input
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                >
                </Input>
                <p style={{ color: "red" }}> {formik.errors.password}</p>
                <br />
                <button onClick={handleSignUpClick} type='submit'>{isLoading ? "Loading..." : "Sign Up"}</button>
            </form>
            <table style = {{ padding: "15px" }}>
            </table>
            
        </div>
    )

}

export default SignupForm;