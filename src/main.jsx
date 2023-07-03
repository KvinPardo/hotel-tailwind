import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import RoomProvider from "./context/RoomContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RoomProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </RoomProvider>
);
