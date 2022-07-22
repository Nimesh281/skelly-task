import React from "react";
import "../components/css/Payment.css";
import visa from "../assets/images/visaa.png";
import master from "../assets/images/mastercard.png";
import maestro from "../assets/images/maestro.png";
import discover from "../assets/images/discover.png";
import ideal from "../assets/images/ideal.png";
import inpost from "../assets/images/inpost.png";
import dpd from "../assets/images/dpd.png";
import dhl from "../assets/images/dhl.png";
import fedex from "../assets/images/fedex.png";

function Payment() {
  function buttonclicked(event){
    

  }
  return (
    <div className="payments-container">
      <p>Payment method</p>
      <div className="payment-method">
        <button onClick={buttonclicked}>
          <img
            id="PayPal"
            src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-100px.png"
            border="0"
            alt="PayPal Logo"
          />
        </button>
        <button>
          <img id="visa" src={visa} alt="visalogo" />
        </button>
        <button>
          <img id="master" src={master} alt="masterlogo" />
        </button>
        <br />
        <button>
          <img id="maestro" src={maestro} alt="maestrologo" />
        </button>
        <button>
          <img id="discover" src={discover} alt="discoverlogo" />
        </button>
        <button>
          <img id="ideal" src={ideal} alt="ideallogo" />
        </button>
        <br />
      </div>
      <div className="delivery-method">
        <p>Delivery method</p>
        <button>
          <span>
            <img id="inpost" src={inpost} alt="inpostlogo" />
          </span>
          <span id="currency"> $20.00</span>
        </button>
        <button>
          <span>
            <img id="dpd" src={dpd} alt="dpdlogo" />
          </span>
          <span id="currency"> $12.00</span>
        </button>

        <br />
        <button>
          <span>
            <img id="dhl" src={dhl} alt="dhllogo" />
          </span>
          <span id="currency"> $15.00</span>
        </button>
        <button>
          <span>
            <img id="fedex" src={fedex} alt="fedexlogo" />
          </span>
          <span id="currency"> $10.00</span>
        </button>

        <br />
      </div>
    </div>
  );
}

export default Payment;
