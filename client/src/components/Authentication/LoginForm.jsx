import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm({loginUser, loggedIn, setLoggedIn, currentUser, onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);

        if(loggedIn){
            fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, password}),
            })
            .then((r) => {
                if(r.ok){
                    r.json().then(data => {
                        loginUser(data.user)
                    })
                }else{
                    r.json().then((err) => setErrors(err.errors));
                }
                
                // setIsLoading(false);
                // if(r.ok){
                //     r.json().then((user) => user(user));
                // }else{
                //     r.json().then((err) => setErrors(err.errors));
                // }
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
                <button variant="fill" color="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                    </button>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </form>
            
            <div>
            <p>
            Don't have an account? &nbsp;
            </p>
            <button onClick={ () => navigate(`/signup/`) }>
              Sign Up
            </button>
            </div> 
        </div>
    );
}

export default LoginForm;