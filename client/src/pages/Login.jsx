import {useState} from "react";
import LoginForm from "../components/Authentication/LoginForm";
import SignUpForm from "../components/Authentication/SignUpForm";

function Login({currentUser, onLogin, isLoading, setIsLoading, errors, setErrors}){
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [errors, setErrors] = useState([]);

  return(
    <div>
      {showLogin ? (
        <div>
          <LoginForm onLogin={onLogin} 
          username={username} setUsername={setUsername} 
          password={password} setPassword={setPassword} 
          errors={errors} setErrors={setErrors} 
          isLoading={isLoading} setIsLoading={setIsLoading} />
          <p>Don't have an account? &nbsp;</p>
          <button onClick={() => setShowLogin(false)}>Sign Up</button>
        </div>
      ) : (
        <div>
            <SignUpForm onLogin={onLogin} 
            username={username} setUsername={setUsername} 
            password={password} setPassword={setPassword} 
            errors={errors} setErrors={setErrors} 
            isLoading={isLoading} setIsLoading={setIsLoading} />
            <p>Already have an account? &nbsp;</p>
            <button onClick={() => setShowLogin(true)}>Log In</button>
        </div>
      )}
    </div>
  );
}

export default Login;