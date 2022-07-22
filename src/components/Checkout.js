import React from "react";
import "../components/css/Checkout.css";
import product1 from "../assets/images/product1.jpg";
import product2 from "../assets/images/product2.png";
import truck from "../assets/images/truck.png";

function Checkout() {
  return (
    <div className="checkout1">
      <div className="heading">Your cart</div>

      <div className="product-card">
        <div className="product-info">
          <div className="product-image">
            <img className="product-image" src={product1} alt="product1" />
          </div>
          <div className="product-details">
            <p>T-shirt</p>
            <p>Summer vibes</p>
            <p id="product-id">#261311</p>
          </div>
        </div>
        <div className="price">
          <p>$89.99</p>
        </div>
      </div>
      <div className="product-card">
        <div className="product-info">
          <div className="product-image">
            <img className="product-image" src={product2} alt="product2" />
          </div>
          <div className="product-details">
            <p>Black Slim</p>
            <p>Fit T-shirt</p>
            <p id="product-id">#212315</p>
          </div>
        </div>
        <div className="price">
          <p>$69.99</p>
        </div>
      </div>
      <div className="total">
        <span>Total Cost</span>
        <span id="total-cost">$159.98</span>
      </div>
      <div className="free-shipping">
        <img id="truck1" src={truck} alt="truck" />
        <p>
          You are $30.02 away from <br></br>free shipping !
        </p>
      </div>
    </div>
  );
}

export default Checkout;
