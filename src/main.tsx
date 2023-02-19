import React from "react";
import ReactDOM from "react-dom/client";
import CountryProvider from "./context/countrys";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Details from "./pages/Details";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/details",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CountryProvider>
      <RouterProvider router={browserRouter}></RouterProvider>
    </CountryProvider>
  </React.StrictMode>
);
