import {useState} from "react";
import LoginForm from "../components/Authentication/LoginForm";
import SignUpForm from "../components/Authentication/SignUpForm";

function Login({currentUser, onLogin}){
  const [showLogin, setShowLogin] = useState(true);
  const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    console.log("Login.jsx currentUser: " + currentUser);

    // if(showLogin == true) {
    //   console.log("Login.jsx to LoginForm.jsx:");
    //   console.log(<LoginForm onLogin={onLogin} 
    //     username={username} setUsername={setUsername} 
    //     password={password} setPassword={setPassword} 
    //     errors={errors} setErrors={setErrors} 
    //     isLoading={isLoading} setIsLoading={setIsLoading} />);
    // }
    // else {
    //   console.log("Login.jsx to SignUpForm.jsx:");
    //   console.log(<SignUpForm onLogin={onLogin} 
    //     username={username} setUsername={setUsername} 
    //     password={password} setPassword={setPassword} 
    //     errors={errors} setErrors={setErrors} 
    //     isLoading={isLoading} setIsLoading={setIsLoading} />);
    // }

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