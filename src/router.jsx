import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";

// Pages
import RoomDetails from "./pages/RoomDetails";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/room/:id",
        element: <RoomDetails />,
      },
    ],
  },
]);

export default router;
