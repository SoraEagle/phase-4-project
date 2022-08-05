import React, {useState} from 'react'
import styled from 'styled-components';
import LoginForm from "../components/LoginForm";
import SignUpForm from '../components/SignUpForm';

function Login({onLogin}){
    const [showLogin, setShowLogin] = useState(true);
  return (
    <Wrapper>
         {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <hr />
          <p>
            Don't have an account? &nbsp;
            <Button color="secondary" onClick={() => setShowLogin(false)}>
              Sign Up
            </Button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <hr />
          <p>
            Already have an account? &nbsp;
            <Button onClick={() => setShowLogin(true)}>
              Log In
            </Button>
          </p>
        </>
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login