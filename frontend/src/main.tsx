import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Courses from "./pages/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
 
  {
    path: "/courses",
    element: <Courses />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
