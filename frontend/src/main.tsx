import "./index.css";

import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import { environment } from "./environment.ts";
import ErrorPage from "./ErrorPage.tsx";
import Burger from "./pages/Burger.tsx";
import BurgersOverview from "./pages/BurgersOverview.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "burgers",
        element: <BurgersOverview />,
        loader: async () => {
          const data = await axios
            .get(`${environment.BACKEND_URL}/burgers`)
            .then((response) => response.data);
          return data;
        },
      },
      {
        path: "burgers/:id?",
        element: <Burger />,
        loader: async ({ params }) => {
          const data = await axios
            .get(`${environment.BACKEND_URL}/burgers/${params.id}`)
            .then((response) => response.data);
          return data;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
