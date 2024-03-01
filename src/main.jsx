import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Login from './Pages/Login.jsx';
import CreateAccount from './Pages/Create-Account.jsx';
import ContactUs from './Pages/Contact-Us.jsx';
import PrivacyPolicy from './Pages/Privacy-policy.jsx';

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
    element: <CreateAccount />
  },

  {
    path: "Contact-Us",
    element: <ContactUs />
  },

  {
    path: "privacy-policy",
    element: <PrivacyPolicy />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
