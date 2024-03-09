import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Login from "./Pages/Login.jsx";
import CreateAccount from "./Pages/Create-Account.jsx";
import ContactUs from "./Pages/Contact-Us.jsx";
import PrivacyPolicy from "./Pages/Privacy-policy.jsx";
import PaymentInfo from "./payment-App/Payment-info.jsx";
import PaymentOption1 from "./payment-App/Payment-options1.jsx";
import PaymentOption2 from "./payment-App/Payments-options2.jsx";
import PaymentStatusCompleted1 from "./payment-App/payment-status-completed1.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "login",
    element: <Login />,
  },

  {
    path: "Create-Account",
    element: <CreateAccount />,
  },

  {
    path: "Contact-Us",
    element: <ContactUs />,
  },

  {
    path: "privacy-policy",
    element: <PrivacyPolicy />,
  },

  {
    path: "Support",
    element: <PaymentStatusCompleted1 />,
  },

  {
    path: "Payment-Info",
    element: <PaymentInfo />,
  },

  {
    path: "Payment-Info/Payment-Option1",
    element: <PaymentOption1 />,
  },

  {
    path: "Payment-Info/Payment-Option1/Payment-Option2",
    element: <PaymentOption2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
