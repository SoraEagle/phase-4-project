import React, {useState} from 'react';
import {baseUrl, headers} from '../../Globals';

function SignUpForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){
    // const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const strongParams = {
          user: {
            username,
            password
            // password_confirmation: passwordConfirmation
          }
        }
        setErrors([]);
        setIsLoading(true);
        console.log(strongParams)
        fetch(baseUrl + '/users', {
          method: "POST",
          headers: headers,
          body: JSON.stringify(strongParams)
        })
        .then(r => r.json())
        .then(data => {
          setIsLoading(false);
          onLogin(data.user)
          // localStorage.setItem('token', data.token)
        });
    }
  
  return(
    <div id='signup'>
      <h1>Create Your Account Here</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text" id="username"
            autoComplete="off" value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password" id="password" name="password"
            autoComplete="current-password" value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {/* <div>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password" id="password_confirmation" name="password_confirmation"
            autoComplete="current-password" value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
          />
        </div> */}
        <div>
          <input type="submit" value={isLoading ? "Loading..." : "Sign Up"} />
        </div>
        <div>
          {errors.map((err) => (
            <error key={err}>{err}</error>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;