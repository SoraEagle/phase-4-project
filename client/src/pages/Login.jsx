import React, {useState} from 'react'
import LoginForm from "../components/LoginForm";
import SignUpForm from '../components/SignUpForm';

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
  return (
    <wrapper>
         {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr />
          <p>
            Don't have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <hr />
          <p>
            Already have an account? &nbsp;
            <button onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </wrapper>
  )
}

export default Login;