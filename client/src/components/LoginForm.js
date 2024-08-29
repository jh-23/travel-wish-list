import React, { useContext } from 'react'
import { Context } from './Context'
import { useNavigate } from 'react-router-dom'
import Input from './Input';
import { Link } from 'react-router-dom'
import SignupForm from './SignupForm';

function LoginForm() {

    const { username, setUsername, password, setPassword, isLoading, setIsLoading, errors, setErrors, setUser, showSignup, setShowSignUp } = useContext(Context);

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
                    console.log(user);
                    setUser(user);
                    navigate('/home');
                });
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    function handleSignUpClick(){
        setShowSignUp(true)
    }

    return(
        <div class="bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://wallpapers.com/images/hd/plane-desktop-yms31u8wyuke7ari.jpg')" }}>{showSignup ? (<SignupForm />) : (
        <>

            <br />
            <form onSubmit={handleSubmit}>
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to the Travel Wish List App!</h1>
            <h4 class="text-2xl font-bold dark:text-white">Please sign in to view travel information: </h4>
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username: </label>
                    <Input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type='text'
                    id='username'
                    autoComplete='off'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}>
                    </Input>
                </div>
                <br />
                <div>
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Password: </label>
                    <Input
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-400 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </Input>
                </div>
                <br/>
                <button type='submit' class="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">
                    {isLoading ? "Loading..." : "Login"}
                </button>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <h4 class="text-2xl font-bold dark:text-white">Don't have a Travel Wish List account?   Sign Up Here:</h4>
            </form>

            <Link to="/signupform">
            <button onClick={handleSignUpClick} class="bg-indigo-500 text-white py-1 px-2 hover:bg-indigo-700 transition-colors">Sign Up</button>
            </Link>
            </>
            )}
            {errors && errors.length > 0 && (
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