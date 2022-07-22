import React from "react";
import { useRef, useState } from "react";
import { signup,logout, useAuth } from "./firebase";
import "../components/css/Signup.css";
import { useNavigate } from "react-router-dom";


function Login() {
  const [loading, setLoading] = useState(false);
  const currentUser = useAuth();

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };

  async function handleSignup() {
    setLoading(true);

    await signup(emailRef.current.value, passwordRef.current.value);

    setLoading(false);
    console.log("id");
    const signupemail = document.getElementById('email');
    const signuppass = document.getElementById('password');
    signupemail.value="";
    signuppass.value="";
    navigateToLogin();
    handleLogout();

  }
  async function handleLogout() {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("Error!");
    }
    setLoading(false);
  }
  return (
    <>
      <div iclassName="main-signup">
        <div className="main-container">
          <div className="signup">
            <form>
              <label aria-hidden="true">Sign up</label>
              <br />
              <input
                type="text"
                name="txt"
                placeholder="User name"
                required=""
              />
              <br />
              <input id="email"
                ref={emailRef}
                type="email"
                name="email"
                placeholder="Email"
                required=""
              />
              <br />
              <input id="password"
                ref={passwordRef}
                type="password"
                name="pswd"
                placeholder="Password"
                required=""
              />
              <br />
              <button disabled={loading || currentUser} onClick={handleSignup}>
                Sign up
              </button>
            </form>
          </div>
        </div>

        <div>Currently logged in as: {currentUser?.email} </div>

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
        </button>
         */}
      </div>
    </>
  );
}

export default Login;
