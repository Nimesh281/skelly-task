import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import Paymentform from "./Paymentform";

const PUBLIC_KEY =
  "pk_test_51L27QtSEnIkxsRthx48Zi1576SCREroz5hyPWpb3PltlhIvbWbj4rxZfrVT3bfM0mzKTpobIP2OlXHUoS0IEupO400m3FgxthA";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <div className="payment-conatianer">
      <Elements stripe={stripeTestPromise}>
        <Paymentform />
      </Elements>
    </div>
  );
}
