import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { MainRouter } from "./routes/MainRouter";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const publishableKey =
  "pk_test_51Mb4tMGfqFLxnBYx4RvOYCUQ9zoWVfiKcZPSbqVuHifxnFNiKtWlveEZMQzc7dwlQxZ27l5Qqln7Mv9MXWB94aBu00JP4Q6QR6";
const stripePromise = loadStripe(publishableKey);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Elements stripe={stripePromise}>
      <MainRouter />
    </Elements>
  </React.StrictMode>
);

reportWebVitals();
