import React from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm({loggedIn, setLoggedIn, onLogin, user, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        if(loggedIn){
            fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            })
            .then((r) => {
                // setIsLoading(false);
                // if(r.ok){
                //     r.json().then(data => {
                //         onLogin(data.user)
                //     })
                // }else{
                //     r.json().then((err) => setErrors(err.errors));
                // }
                
                setIsLoading(false);
                if(r.ok){
                    r.json().then((user) => user(user));
                }else{
                    r.json().then((err) => setErrors(err.errors));
                }
            });
        }
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
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">
                    {isLoading ? "Loading..." : "Login"}
                    </button>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </form>
        </div>
    );
}

export default LoginForm;