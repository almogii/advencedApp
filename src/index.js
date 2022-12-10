import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./components/UI/Cart/Cart"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>you have a problem</h1>,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  
  </React.StrictMode>
);

reportWebVitals();
