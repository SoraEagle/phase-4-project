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
      // console.log(strongParams)
      // debugger
      fetch('/users', {
        method: "POST",
        headers: headers,
        body: JSON.stringify(strongParams)
      }).then((user) => {
        setIsLoading(false);
        // debugger
        user.json().then((user) => {
          if(user.errors){ // If the user Object has errors:
            console.log("user.errors: ", user.errors);
            // debugger
            setErrors(user.errors); // set the state of "errors" to user.errors
            return errors;
          } else{ // Otherwise, log in
            // debugger
            onLogin(user);
            console.log("Signed up");
          }
        });
      });
      // console.log("Errors: ", errors);
    }

    // Fix being able to ATTEMPT to sign up an User without an username or password, WITHOUT the page erroring out...
  
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