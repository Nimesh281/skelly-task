import React from "react";
import "../components/css/Footer.css";
import { useNavigate } from "react-router-dom";


function Footer() {
  const navigate = useNavigate();
  function handlePayment(){
    navigate("/payments");
  }

  return (
    <div className="footer">
      <div className="left-part">
        <img
          id="back"
          src="https://img.icons8.com/ios-filled/50/000000/long-arrow-left.png"
          alt="back"
        />

        <p>Back</p>
      </div>
      <div className="right-part">
        <button>CONTINUE SHOPPING</button>
        <button id="payment" onClick={handlePayment}>
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
}

export default Footer;
