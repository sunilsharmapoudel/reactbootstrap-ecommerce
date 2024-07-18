import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import HomePage from "./pages/HomePage.jsx";
import ProductPage from "./pages/HomePage.jsx";

const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "",
      element: <HomePage />
    },
    {
      path: "product",
      element: <ProductPage />
    },
  ]
},
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
