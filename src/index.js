import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes/AppRoutes";
import "./Styles/Global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRoutes} />);
