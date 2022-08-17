import React, {useState} from 'react';
import { baseUrl, headers } from '../Globals';

function SignUpForm(onLogin){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();

        const strongParams = {
          user: {
            username,
            password,
            password_confirmation: passwordConfirmation
          }
        }
        setErrors([]);
        setIsLoading(true);
        fetch(baseUrl + '/users', {
          method: "POST",
          headers,
          body: JSON.stringify(strongParams)
        }).then((r) => {
          setIsLoading(false);
          if (r.ok){
            r.json().then((user) => onLogin(user.user));
          } else{
            r.json().then((err) => setErrors(err.errors));
          }
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
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password" id="password"
            autoComplete="current-password" value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password Confirmation</label>
          <input
            type="password" id="password_confirmation"
            autoComplete="current-password" value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
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