import React, {useState} from "react";
import {useNavigate} from 'react-router-dom';

function LoginForm({onLogin}){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        setIsLoading(true);
        if @current
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok){
                r.json().then((user) => onLogin(user));
            } else{
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return(
        <div onSubmit={handleSubmit}>
            <form>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />
            </form>
            <form>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </form>
            <form>
                <button variant="fill" color="primary" type="submit">
                    {isLoading ? "Loading..." : "Login"}
                    </button>
            </form>
            <form>
                {errors.map((err) => (
                    <error key={err}>{err}</error>
                ))}
            </form>
            
            <div>
            <p>
            Don't have an account? &nbsp;
            </p>
            <button onClick={navigate("/SignUpForm")}>
              Sign Up
            </button>
            </div> 
        </div>
    );
}

export default LoginForm;