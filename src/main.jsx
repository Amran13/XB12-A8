import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import React from 'react'
import MyApps from './component/MyApp.jsx';
import Home from './component/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path: "/my-apps",
        element: <MyApps />,
      },
      {
        path : "/installations",
        element : <div>Installations</div>
      }
    ]
  },

]);



createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>
)
