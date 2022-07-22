import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "../components/css/Paymentform.css";
import { useNavigate } from "react-router-dom";



const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:4000/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };
  function checker() {
    setSuccess(true);
  }
  const navigate = useNavigate();

  const navigatetohome = () => {
    navigate("/");
  };

  return (
    <>
      {!success ? (
        <div className="box">
            <p>PAYMENT GATEWAY INTEGRATION USING STRIPE </p>
            <h3>use stripe default card no 4242424242424 in sequence and enter valid date any cvv and zip no </h3>
          <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
              <div className="FormRow">
                <CardElement options={CARD_OPTIONS} />
              </div>
            </fieldset>
            <button onClick={checker}>Pay</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>
          🙌 Hurray your purchase was successfull !! 🙌
          </h2>
          <button onClick={navigatetohome}>go back to checkout page</button>
        </div>
      )}
    </>
  );
}
