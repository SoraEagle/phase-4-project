import React from 'react';
import {headers} from '../../Globals';

function SignUpForm({onLogin, username, setUsername, password, setPassword, errors, setErrors, isLoading, setIsLoading}){

    function handleSubmit(e){
      e.preventDefault();
      
      const strongParams = {
        user: {
          username,
          password
        }
      }

      setIsLoading(true);
      fetch('/users', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(strongParams)
      }).then((user) => {
        setIsLoading(false);
        user.json().then((user) => {
          if(user.errors){ // If the user Object has errors:
            setErrors(user.errors); // set the state of "errors" to user.errors
            return errors;
          } else{ // Otherwise, log in
            onLogin(user);
          }
        });
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
        <div>
          <input type="submit" value={isLoading ? "Loading..." : "Sign Up"} />
        </div>
        <div>
          {errors?.map((error) => (
            <p key={error}>{error}</p>
          ))}
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;