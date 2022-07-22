import React from "react";
import "../components/css/Shipping.css";
import Payment from "./Payment";
import Checkout from "./Checkout";
import cart from "../assets/images/cart.png";
import truck from "../assets/images/truck.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Shipping() {
const [login, setlogin] = useState("")

  const navigate = useNavigate();
  const navigateToLogin = () => {
    navigate("/login");
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };
  
  return (
    <div className="shipping_payment">
      <div className="heading">
        <p id="shipping_payment_p">Shipping and Payment</p>
        <div className="right-side">
          <img id="cart" src={cart} alt="cart" />
          <hr />
          <img id="truck" src={truck} alt="truck" />
        </div>
      </div>
      <div className="middle-section">
        <div className="users-info">
          <div className="User-information">
            <button id="login" onClick={navigateToLogin}>
              LOG IN
            </button>
            <button id="signup" onClick={navigateToSignup}>
              SIGN UP
            </button>
            <br />
            <br />
          </div>
          <div className="user-form">
            <label>Shipping information</label>
            <br />
            <input type="email" placeholder="Email"></input>
            <input type="text" placeholder="Address"></input>
            <br />
            <input type="text" placeholder="First name"></input>
            <input type="text" placeholder="City"></input>
            <br />
            <input type="text" placeholder="Last name"></input>
            <input type="text" placeholder="Postal Code / ZIP"></input>
            <br />
            <input type="number" placeholder="Phome number"></input>

            <select>
              <option id="option" value="Poland">
                Poland
              </option>
              <option id="option" value="England">
                England
              </option>
              <option id="option" value="India">
                India
              </option>
              <option id="option" value="USA">
                USA
              </option>
              <option id="option" value="France">
                France
              </option>
            </select>
          </div>
        </div>
        <div className="payment">
          <Payment />
        </div>
        <div className="checkout">
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default Shipping;
