import React from "react";

function LoginForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){
    function handleSubmit(e){
        e.preventDefault();
        console.log("submitting login request");
        setIsLoading(true);
        // debugger
        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username, password}),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok){
                r.json().then((user) => onLogin(user));
                console.log("Logged in");
            }else{
                r.json().then((err) => setErrors(err.errors));
            }
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
                <div>
                    {errors?.map((err) => (
                        <label key={err}>{err}</label>
                    ))}
                </div>
            </form>
        </div>
    );
}

export default LoginForm;