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
import ErrorPage from './component/ErrorPage.jsx';
import MyAppDetails from './component/MyAppDetails.jsx';
import MyInstallation from './component/MyInstallation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/my-apps",
        element: <MyApps />,
      },
      {
        path: '/my-apps/:id',
        element: <MyAppDetails />,
      },
      {
        path: "/installations",
        element: <MyInstallation></MyInstallation>
      },
      {
        path: '*',
        element: <ErrorPage></ErrorPage>
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
