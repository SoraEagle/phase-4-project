import React, {useState} from 'react';

function SignUpForm(onLogin){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
            password_confirmation: passwordConfirmation,
          })
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
  
  return(
    <div onSubmit={handleSubmit}>
      <form>
        <label htmlFor="username">Username</label>
        <input
          type="text" id="username"
          autoComplete="off" value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </form>
      <form>
        <label htmlFor="password">Password</label>
        <input
          type="password" id="password"
          autoComplete="current-password" value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </form>
      <form>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password" id="password_confirmation"
          autoComplete="current-password" value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </form>
      <form>
        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </form>
      <form>
        {errors.map((err) => (
          <error key={err}>{err}</error>
        ))}
      </form>
    </div>
  );
}

export default SignUpForm;