import React from "react";
import {headers} from '../../Globals';

function LoginForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){
    function handleSubmit(e){
        e.preventDefault();
        console.log("submitting login request");
        setIsLoading(true);
        fetch("/login", {
            method: "POST",
            headers: headers,
            body: JSON.stringify({username, password})
        }).then((user) => {
            setIsLoading(false);
            // debugger
            user.json().then((user) => {
                if(user.errors){
                    console.log("user.errors: ", user.errors);
                    // debugger
                    setErrors(user.errors);
                    return errors;
                } else{
                    // debugger
                    onLogin(user);
                    console.log("Logged in");
                }
            });
        });
    }

    return(
        <div onSubmit={handleSubmit}>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">
                    {isLoading ? "Loading..." : "Login"}
                </button>
                <div>
                    {errors?.map((err) => (
                        <p key={err}>{err}</p>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;