import React, { useContext } from 'react'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import Input from './Input';

function LoginForm() {

    const { username, setUsername, password, setPassword, isLoading, setIsLoading, errors, setErrors, setUser } = useContext(Context);

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                r.json().then((user) => {
                    setUser(user);
                    navigate('/');
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <div>
            <h1>Welcome to the Travel Wish List</h1>
            <h4>Please sign in to view travel information: </h4>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <Input
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                    </Input>
                </div>
                <br />
                <div>
                    <label htmlFor='password'>Password: </label>
                    <Input
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                </div>
                <button type='submit' className="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">
                    {isLoading ? "Loading..." : "Login"}
                </button>
            </form>
            {errors.length > 0 && (
                <div>
                    {errors.map((error, index) => (
                        <p key={index} style={{ color: 'red' }}>{error}</p>
                    ))}
                </div>
            )}
        </div>
    )
}

export default LoginForm;