import React from "react";
import logo from "../assets/images/image.png";
import "../components/css/Navbar.css";
import Getuser from "./Getuser";
import {  logout } from "./firebase";
import {  useState } from "react";

function Navbar() {
  const [loading, setLoading] = useState(false);
  // const currentUser = useAuth();

  // const emailRef = useRef();
  // const passwordRef = useRef();

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
    <div>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-category">
          <section>Men</section>
          <section>Women</section>
          <section>Kids</section>
        </div>
        <div className="navbar-features">
          <img
            src="https://img.icons8.com/ios/50/000000/search--v1.png"
            alt="search"
          />
          <img
            src="https://img.icons8.com/material-outlined/48/000000/shopping-cart--v1.png"
            alt="cart"
          />

          <div className="dropdown">
            <button className="dropbtn">
              <img 
                src="https://img.icons8.com/ios/50/000000/guest-male.png"
                alt="account"
              />
            </button>
            <div class="dropdown-content">
              <p>
                <Getuser />
              </p>
              <br />
              <button onClick={handleLogout}>LOG OUT</button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Navbar;
