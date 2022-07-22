import React from "react";
import { useRef, useState } from "react";
import { login, useAuth } from "./firebase";
import "../components/css/Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin() {
    setLoading(true);
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("Error!");
    }
    setLoading(false);
    const signupemail = document.getElementById("email");
    const signuppass = document.getElementById("password");
    signupemail.value = "";
    signuppass.value = "";
    navigateToMain();
  }

  const navigate = useNavigate();
  const navigateToSignup = () => {
    navigate("/signup");
  };
  const navigateToMain = () => {
    navigate("/");
  };
  // const redirect = () => {
  //   navigate("/");
  // };

  return (
    <>
      <div iclassName="main-login">
        <div className="main-container">
          <div className="login">
            <form>
              <label aria-hidden="true">Login</label>
              <br />
              <input id="email" ref={emailRef} placeholder="Email" />
              <br />
              <input
                id="password"
                ref={passwordRef}
                type="password"
                placeholder="Password"
              />
              <br />
              <button disabled={loading || currentUser} onClick={handleLogin}>
                Login
              </button>
              <label id="no_account">Dont have a Acccount :</label>
              <button onClick={navigateToSignup}> Sign Up</button>
            </form>
          </div>
        </div>

        {/* <div id="fields">
          <input ref={emailRef} placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
        </div>
        <div id="fields">
          <input ref={emailRef} placeholder="Email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
        </div>

        <button disabled={loading || currentUser} onClick={handleSignup}>
          Sign Up
        </button>
        <button disabled={loading || currentUser} onClick={handleLogin}>
          Log In
        </button> */}
      </div>
    </>
  );
}

export default Login;
